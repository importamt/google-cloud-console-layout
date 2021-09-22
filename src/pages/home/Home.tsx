import {Route, RouteChildrenProps} from "react-router-dom";
import React from "react";
import {Intro} from "./Intro";
import {AboutMe} from "./AboutMe";

export const Home = ({match}: RouteChildrenProps) => {

    console.log("HOME", match)

    return (
        <>
            <Route exact path={`/`}>
                <AboutMe/>
            </Route>
            <Route path={`${match?.url}/about-me`}>
                <AboutMe/>
            </Route>
            <Route path={`${match?.url}/intro`}>
                <Intro/>
            </Route>
        </>
    )
}
