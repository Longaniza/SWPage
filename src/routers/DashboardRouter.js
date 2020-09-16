import React from 'react'
import { Switch, Redirect, Route} from 'react-router-dom'
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
    const publico = process.env.PUBLIC_URL;
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path={publico + '/movie1'} component={NewHopeScreen}/>
                    <Route exact path={publico + '/movie2'} component={EmpireStrikesScreen}/>
                    <Route exact path={publico + '/movie3'} component={ReturnJediScreen}/>
                    <Route exact path={publico + '/movie4'} component={PhantomMenaceScreen}/>
                    <Route exact path={publico + '/movie5'} component={AttackClonesScreen}/>
                    <Route exact path={publico + '/movie6'} component={RevengeSith}/>
                    <Route exact path={publico + "/planet/:planetName"} component={PlanetScreen}/>
                    <Route exact path={publico + "/search"} component={PlanetSearch}/>
                    <Redirect to={publico + '/movie1'}/>
                </Switch>
            </div>   
        </>
    )
}
