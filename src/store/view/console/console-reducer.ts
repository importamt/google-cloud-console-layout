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

    MAP: {
        id: 'MAP',
        name: 'Map',
        iconId: 'map',
        url: '/map/clustering',
    },

    MAP_CLUSTERING: {
        id: 'MAP_CLUSTERING',
        parentId: 'MAP',
        name: 'Clustering',
        iconId: 'flowMerge',
        url: '/map/clustering'
    },
    MAP_DRAWING: {
        id: 'MAP_DRAWING',
        parentId: 'MAP',
        name: 'Drawing',
        iconId: 'drawPolygon',
        url: '/map/drawing'
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
