import {combineReducers, configureStore, EnhancedStore} from "@reduxjs/toolkit";
import {all, fork} from "@redux-saga/core/effects";
import createSagaMiddleware from "redux-saga";

const dataReducer = combineReducers({})
const viewReducer = combineReducers({})
const rootReducer = combineReducers({
    view: viewReducer,
    data: dataReducer,
})
const rootSaga = function* () {
    yield all([
        // fork()
    ])
}

export type RootState = ReturnType<typeof rootReducer>
export const createStore = (): EnhancedStore<RootState> => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(sagaMiddleware),
        devTools: process.env.NODE_ENV !== "production",
    })
    sagaMiddleware.run(rootSaga)
    return store
}
