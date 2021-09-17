import React from "react";
import {Home} from "@styled-icons/boxicons-regular/Home";
import {Enter} from "@styled-icons/ionicons-outline/Enter";
import {InfoCircle} from "@styled-icons/boxicons-regular/InfoCircle";
import {Map} from "@styled-icons/bootstrap/Map";
import {FlowMerge} from "@styled-icons/typicons/FlowMerge";
import {DrawPolygon} from "@styled-icons/fa-solid/DrawPolygon";
import {User} from "@styled-icons/boxicons-regular/User";
import {UserNinja} from "@styled-icons/fa-solid/UserNinja";
import {StyledIcon} from "@styled-icons/styled-icon";
import {Refresh} from "@styled-icons/evaicons-solid/Refresh"

import {Error} from "@styled-icons/boxicons-regular/Error";


const ICON_MAP: { [key: string]: StyledIcon } = {
    home: Home,
    enter: Enter,
    infoCircle: InfoCircle,
    map: Map,
    flowMerge: FlowMerge,
    drawPolygon: DrawPolygon,
    user: User,
    userNinja: UserNinja,
    refresh: Refresh,
}

interface IIcon {
    iconId: string | undefined | null
}

export const Icon = ({iconId}: IIcon) => {
    return iconId ? React.createElement(ICON_MAP[iconId]) : React.createElement(Error)
}
