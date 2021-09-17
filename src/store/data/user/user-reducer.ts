import {SET_USERS, User} from ".";
import {createReducer, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    users: User[] | null
}

const initialState: UserState = {
    users: null
}

export const UserReducer = createReducer(initialState, {
    [SET_USERS]: (state: UserState, action: PayloadAction<User[]>) => {
        state.users = action.payload
    }
})
