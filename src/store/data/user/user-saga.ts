import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {RETRIEVE_USERS, retrieveUsersFail, retrieveUsersSuccess, setUsers} from "./user-action";
import {User} from "./index";
import {retrieveUsers} from "./user-api";
import {PayloadAction} from "@reduxjs/toolkit";
import {AxiosResponse} from "axios";

export const handleRetrieveUsers = function* () {
    try {
        const userJson: AxiosResponse = yield call(retrieveUsers)
        const users: User[] = userJson.data.results
        yield put(retrieveUsersSuccess(users))
    } catch (e) {
        yield put(retrieveUsersFail(e))
    }
}
const handleRetrieveUserSuccess = function* (action: PayloadAction<User[]>) {
    yield put(setUsers(action.payload))
}
const handleRetrieveUserFail = function* (error: PayloadAction<any>) {
    console.error("put redux users FAIL. it will be []", error.payload)
    yield put(setUsers([]))
}


const watchUser = function* () {
    yield takeLatest(RETRIEVE_USERS.request, handleRetrieveUsers)
    yield takeLatest(RETRIEVE_USERS.success, handleRetrieveUserSuccess)
    yield takeLatest(RETRIEVE_USERS.fail, handleRetrieveUserFail)
}

export const UserSaga = function* () {
    yield all([
        watchUser()
    ])
}
