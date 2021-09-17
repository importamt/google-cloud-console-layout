import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {Menu, SET_SELECTED_MENU_ID} from "./index";

import {Home} from '@styled-icons/boxicons-regular/Home'
import {Enter} from '@styled-icons/ionicons-outline/Enter'
import {InfoCircle} from '@styled-icons/boxicons-regular/InfoCircle'
import {Map} from '@styled-icons/bootstrap/Map'
import {FlowMerge} from '@styled-icons/typicons/FlowMerge'
import {DrawPolygon} from '@styled-icons/fa-solid/DrawPolygon'
import {User} from '@styled-icons/boxicons-regular/User'
import {UserNinja} from '@styled-icons/fa-solid/UserNinja'

interface ConsoleState {
    selectedMenuId: string,
    menus: Menu[]
}

const initialState: ConsoleState = {
    selectedMenuId: 'menu_001_001',
    menus: [
        {
            id: 'menu_001',
            name: 'Home',
            url: '/home',
            icon: Home,
        },

        {
            id: 'menu_001_001',
            parentId: 'menu_001',
            name: 'Intro',
            icon: Enter,
            url: '/home/intro'
        }, {
            id: 'menu_001_002',
            parentId: 'menu_001',
            name: 'About me',
            icon: InfoCircle,
            url: '/home/about-me'
        },

        {
            id: 'menu_002',
            name: 'Map',
            icon: Map,
            url: '/map',
        },

        {
            id: 'menu_002_001',
            parentId: 'menu_002',
            name: 'Clustering',
            icon: FlowMerge,
            url: '/map/clustering'
        }, {
            id: 'menu_002_002',
            parentId: 'menu_002',
            name: 'Drawing',
            icon: DrawPolygon,
            url: '/map/drawing'
        },

        {
            id: 'menu_003',
            name: 'User',
            icon: User,
            url: '/user',
        },
        {
            id: 'menu_003_001',
            parentId: 'menu_003',
            name: 'random-user',
            icon: UserNinja,
            url: '/user/random-user'
        }
    ]
}

export const ConsoleReducer = createReducer(initialState, {
    [SET_SELECTED_MENU_ID]: (state: ConsoleState, action: PayloadAction<string>) => {
        state.selectedMenuId = action.payload
    }

})
