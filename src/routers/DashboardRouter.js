import React from 'react'
import { Switch, Redirect, Route, useHistory } from 'react-router-dom'
import { Navbar } from '../Components/ui/NavBar'
import { BlackpinkScreen } from '../Components/blackpink/BlackpinkScreen'
import { RedVelvetSreen } from '../Components/redvelvet/RedVelvetSreen'
import { IdolScreen } from '../Components/idols/IdolScreen'
import { IdolSearch } from '../Components/idols/IdolSearch'
import { GidleScreen } from '../Components/(g)i-dle/GidleScreen'
export const DashboardRouter = ({history}) => {
    const lastpath = localStorage.getItem('lastpath');
    return (
        
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path='/blackpink' component={BlackpinkScreen}/>
                    <Route exact path='/redvelvet' component={RedVelvetSreen}/>
                    <Route exact path='/gidle' component={GidleScreen}/>
                    <Route exact path="/idol/:idolId" component={IdolScreen}/>
                    <Route exact path="/search" component={IdolSearch}/>
                    <Redirect to={lastpath}/>
                </Switch>
            </div>   
        </>
    )
}
