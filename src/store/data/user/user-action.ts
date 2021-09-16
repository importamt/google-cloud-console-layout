import {createAction} from "@reduxjs/toolkit";
import {getAsyncActions} from "../../../functions/getAsyncActions";


const prefix = 'user'

export const SET_USER = `${prefix}/SET_USER`
export const setUser = createAction<User[]>(SET_USER)

export const RETRIEVE_USER = getAsyncActions(`${prefix}/GET_USER`)
export const retrieveUserRequest = createAction(RETRIEVE_USER.request)
export const retrieveUserSuccess = createAction<Link[]>(RETRIEVE_USER.success)
export const retrieveUserFail = createAction<any>(RETRIEVE_USER.fail)
