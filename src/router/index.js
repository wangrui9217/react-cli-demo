import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomeIndex from './../pages/home/HomeIndex'
import LoginIndex from './../pages/login/LoginIndex'
import EmptyPage from "../pages/empty/Empty";

export default class RouteConfig extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={HomeIndex} />
                    <Route path="/login/:id/:name" component={LoginIndex} />
                    <Route path="/404" component={EmptyPage} />
                    <Redirect to="/404" />
                </Switch>
            </HashRouter>
        )
    }
}
