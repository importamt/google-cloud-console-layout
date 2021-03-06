import {combineReducers, configureStore, EnhancedStore} from "@reduxjs/toolkit";
import {all, fork} from "@redux-saga/core/effects";
import createSagaMiddleware from "redux-saga";
import {UserReducer, UserSaga} from "./data/user";
import {ConsoleReducer} from "./view/console";

const dataReducer = combineReducers({
    user: UserReducer
})
const viewReducer = combineReducers({
    console: ConsoleReducer
})
const rootReducer = combineReducers({
    view: viewReducer,
    data: dataReducer,
})
const rootSaga = function* () {
    yield all([
        fork(UserSaga)
    ])
}

export type RootState = ReturnType<typeof rootReducer>
export const createStore = (): EnhancedStore<RootState> => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false
            }).concat(sagaMiddleware),
        devTools: process.env.NODE_ENV !== "production",
    })
    sagaMiddleware.run(rootSaga)
    return store
}
