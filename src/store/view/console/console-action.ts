import {createAction} from "@reduxjs/toolkit";


const prefix = 'console'

export const SET_SELECTED_MENU_ID = `${prefix}/SET_SELECTED_MENU_ID`
export const setSelectedMenuId = createAction<string>(SET_SELECTED_MENU_ID)
