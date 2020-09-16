import React from 'react'
import { Switch, Redirect, Route, useHistory } from 'react-router-dom'
import { Navbar } from '../Components/ui/NavBar'
import { NewHopeScreen } from '../Components/movieScreens/NewHopeScreen'
import { EmpireStrikesScreen } from '../Components/movieScreens/EmpireStrikesScreen'
import { ReturnJediScreen } from '../Components/movieScreens/ReturnJediScreen'
import { PlanetScreen } from '../Components/movieScreens/PlanetScreen'
import { PhantomMenaceScreen } from '../Components/movieScreens/PhantomMenaceScreen'
import { AttackClonesScreen } from '../Components/movieScreens/AttackClonesScreen'
import { RevengeSith } from '../Components/movieScreens/RevengeSith'
import { PlanetSearch } from '../Components/movieScreens/PlanetSearch'
//import { MovieScreen } from '../Components/movieScreens/MovieScreen'
export const DashboardRouter = ({history}) => {
    //const lastpath = localStorage.getItem('lastpath');
    return (
        
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path='/movie1' component={NewHopeScreen}/>
                    <Route exact path='/movie2' component={EmpireStrikesScreen}/>
                    <Route exact path='/movie3' component={ReturnJediScreen}/>
                    <Route exact path='/movie4' component={PhantomMenaceScreen}/>
                    <Route exact path='/movie5' component={AttackClonesScreen}/>
                    <Route exact path='/movie6' component={RevengeSith}/>
                    <Route exact path="/planet/:planetName" component={PlanetScreen}/>
                    <Route exact path="/search" component={PlanetSearch}/>
                    <Redirect to={'/movie1'}/>
                </Switch>
            </div>   
        </>
    )
}
