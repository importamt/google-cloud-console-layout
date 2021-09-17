import React from 'react'
import ReactDOM from 'react-dom'
import {Home, Map, User} from "./src/pages";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import {createStore} from './src/store';
import {GlobalStyles} from "./src/styles";

const store = createStore()
ReactDOM.render(
    <Router>
        {/*Views*/}
        <Switch>
            <Provider store={store}>
                {/*Common Components*/}
                <GlobalStyles/>
                <Route path={"/home"} component={Home}/>
                <Route path={"/map"} component={Map}/>
                <Route path={"/user"} component={User}/>
            </Provider>
        </Switch>
    </Router>,
    document.getElementById('root')
);
