import {Route, RouteChildrenProps} from "react-router-dom";
import React from "react";
import {RandomUser} from "./RandomUser";

export const User = ({match}: RouteChildrenProps) => {

    return (
        <>
            <Route path={`${match?.url}/random-user`}>
                <RandomUser/>
            </Route>
        </>
    )
}
