import {Route, RouteChildrenProps} from "react-router-dom";
import React from "react";
import {Clustering} from "./Clustering";
import {Drawing} from "./Drawing";

export const Map = ({match}: RouteChildrenProps) => {

    return (
        <>
            <Route path={`${match?.url}/clustering`}>
                <Clustering/>
            </Route>
            <Route path={`${match?.url}/drawing`}>
                <Drawing/>
            </Route>
        </>
    )
}
