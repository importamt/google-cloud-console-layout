import {createAction} from "@reduxjs/toolkit";
import {getAsyncActions} from "../../../functions/getAsyncActions";
import {User} from "./index";


const prefix = 'user'

export const SET_USERS = `${prefix}/SET_USERS`
export const setUsers = createAction<User[]>(SET_USERS)

export const RETRIEVE_USERS = getAsyncActions(`${prefix}/GET_USERS`)
export const retrieveUsersRequest = createAction(RETRIEVE_USERS.request)
export const retrieveUsersSuccess = createAction<User[]>(RETRIEVE_USERS.success)
export const retrieveUsersFail = createAction<any>(RETRIEVE_USERS.fail)

