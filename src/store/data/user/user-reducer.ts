import {SET_USERS, User} from ".";
import {createReducer, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    users?: User[]
}

const initialState: UserState = {}

export const UserReducer = createReducer(initialState, {
    [SET_USERS]: (state: UserState, action: PayloadAction<User[]>) => {
        state.users = action.payload
    }
})
