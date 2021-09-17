import {MouseEventHandler} from "react";
import {Dispatch} from "@reduxjs/toolkit";

export * from './console-action'
export {ConsoleReducer, MENU_INFO} from './console-reducer'

export interface Menu {
    id: string,
    parentId?: string,
    name: string,
    url: string,
    iconId: string,
    actions?: Action[]
}

export interface Action {
    id: string,
    name: string,
    iconId: string,
    handleClick: (dispatch: Dispatch) => MouseEventHandler
}

