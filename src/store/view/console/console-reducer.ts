import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {Menu, SET_SELECTED_MENU_ID} from "./index";
import {useDispatch} from "react-redux";
import {retrieveUsersRequest} from "../../data/user";

interface ConsoleState {
    selectedMenuId: string,
    menus: Menu[]
}

export const MENU_INFO: {
    [key: string]: Menu
} = {
    HOME: {
        id: 'HOME',
        name: 'Home',
        url: '/home/intro',
        iconId: 'home',
    },

    HOME_INTRO: {
        id: 'HOME_INTRO',
        parentId: 'HOME',
        name: 'Intro',
        iconId: 'enter',
        url: '/home/intro'
    },
    HOME_ABOUT_ME: {
        id: 'HOME_ABOUT_ME',
        parentId: 'HOME',
        name: 'About me',
        iconId: 'infoCircle',
        url: '/home/about-me'
    },

    SAMPLE: {
        id: 'SAMPLE',
        name: 'sample1',
        iconId: 'sample',
        url: '/sample/sample1',
    },

    SAMPLE_CLUSTERING: {
        id: 'SAMPLE_CLUSTERING',
        parentId: 'SAMPLE',
        name: 'Clustering',
        iconId: 'flowMerge',
        url: '/sample/sample1'
    },
    SAMPLE_DRAWING: {
        id: 'SAMPLE_DRAWING',
        parentId: 'SAMPLE',
        name: 'sample2',
        iconId: 'drawPolygon',
        url: '/sample/sample2'
    },

    USER: {
        id: 'USER',
        name: 'User',
        iconId: 'user',
        url: '/user/random-user',
    },
    USER_RANDOM_USER: {
        id: 'USER_RANDOM_USER',
        parentId: 'USER',
        name: 'random-user',
        iconId: 'userNinja',
        url: '/user/random-user',
        actions: [
            {
                id: 'USER_RANDOM_USER_REFRESH',
                name: 'refresh',
                iconId: 'refresh',
                handleClick: (dispatch) => {
                    return () => dispatch(retrieveUsersRequest())
                }
            }
        ]
    }
}


const initialState: ConsoleState = {
    selectedMenuId: MENU_INFO.HOME_INTRO.id,
    menus: Object.values(MENU_INFO)
}

export const ConsoleReducer = createReducer(initialState, {
    [SET_SELECTED_MENU_ID]: (state: ConsoleState, action: PayloadAction<string>) => {
        console.log("SELECTED MENU CHANGED!", action.payload)
        state.selectedMenuId = action.payload
    }

})
