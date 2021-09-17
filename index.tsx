import React from 'react'
import ReactDOM from 'react-dom'
import {AboutMe, Home} from "./src/pages";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import { createStore } from './src/store';
import {GlobalStyles} from "./src/styles";

const store = createStore()
ReactDOM.render(
    <Provider store={store}>
        {/*Common Components*/}
        <GlobalStyles/>

        {/*Views*/}
        <Router>
            <Switch>
                <Route>
                    <Home/>
                </Route>
                <Route path={"/home"}>
                    <Home/>
                </Route>
                <Route path={"/map"}>
                </Route>
                <Route path={"/user"}>
                </Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
