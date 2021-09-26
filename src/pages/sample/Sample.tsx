import {Route, RouteChildrenProps} from "react-router-dom";
import React from "react";
import {Sample1} from "./Sample1";
import {Sample2} from "./Sample2";

export const Sample = ({match}: RouteChildrenProps) => {

    return (
        <>
            <Route path={`${match?.url}/sample1`}>
                <Sample1/>
            </Route>
            <Route path={`${match?.url}/sample2`}>
                <Sample2/>
            </Route>
        </>
    )
}
