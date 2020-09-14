import React, { useState,useEffect, useLayoutEffect } from 'react';
import { IdolList } from '../idols/IdolList';

export const BlackpinkScreen = () => {
    const [planets,setPlanets] = useState([]);
    const [movie,setMovie] = useState("");
    useLayoutEffect(() => {
        const getPlanets = async() => {
            const resp = await fetch(`https://swapi.dev/api/films/4/`);
            const movie = await resp.json();
            for(const planetURL of movie.planets){
                const resp = await fetch(planetURL);
                const planet = await resp.json();
                setPlanets(planets => [...planets,planet.name]);
            }
            setMovie(movie.title);
        }
        getPlanets();
    }, [])
    localStorage.setItem('lastpath', '/blackpink');

    return (
        <div>
            <h1>{movie}</h1>
            <h1 style={{marginLeft:35}}>Blackpink</h1>
            <hr/>
            {planets.map(planet => <h1>{planet}</h1> )}
    
            <IdolList group="Blackpink"></IdolList>
        </div>
    )
}
