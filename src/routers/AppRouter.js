import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { DashboardRouter } from './DashboardRouter';
export const AppRouter = () => {
  const lastpath = localStorage.getItem('lastpath')
  console.log(lastpath);
    return (
        <Router>
          <div>
            <Switch>
            <Route path='/' component={DashboardRouter}/>
            </Switch>
          </div>
        </Router>
      );
}
