import React from 'react'
import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route,
  } from "react-router-dom";
import { DashboardRouter } from './DashboardRouter';
export const AppRouter = () => {
  //const lastpath = localStorage.getItem('lastpath')
    return (
        <HashRouter>
          <div>
            <Switch>
            <Route path="/" component={DashboardRouter}/>
            </Switch>
          </div>
        </HashRouter>
      );
}
