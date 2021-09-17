import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import {Intro} from "./Intro";
import {AboutMe} from "./AboutMe";

export const Home = () => {

    return (
        <Router basename={'/home'}>
            <Switch>
                <Route>
                    <Intro/>
                </Route>
                <Route path={"/about-me"}>
                    <AboutMe/>
                </Route>
                <Route path={"/intro"}>
                    <Intro/>
                </Route>
            </Switch>
        </Router>
    )
}
