import {createAction} from "@reduxjs/toolkit";
import {getAsyncActions} from "../../../functions/getAsyncActions";
import {User} from "./index";


const prefix = 'user'

export const SET_USERS = `${prefix}/SET_USERS`
export const setUsers = createAction<User[]>(SET_USERS)

export const RETRIEVE_USER = getAsyncActions(`${prefix}/GET_USER`)
export const retrieveUserRequest = createAction(RETRIEVE_USER.request)
export const retrieveUserSuccess = createAction<User[]>(RETRIEVE_USER.success)
export const retrieveUserFail = createAction<any>(RETRIEVE_USER.fail)

