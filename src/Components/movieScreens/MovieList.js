import React, { useState,useEffect } from 'react'
import { getPlanetsByMovie } from '../../selectors/getPlanetsByMovie';
import { MovieItem } from './MovieItem';
export const MovieList = ({idMovie}) => {
    const [planets,setPlanets] = useState(null);
    useEffect(() => {
        const getPlanets = async() => {
            const resp = await getPlanetsByMovie(idMovie);
            setPlanets(resp);
        }
        getPlanets();
    }, [idMovie])
    return (
        
        <div className="grupo">
            {(planets) ? planets.map(planet => <MovieItem key={planet.name} planet={planet}/>):<div className="spinner-border m-5" role="status">
            <span className="sr-only">Loading...</span>
            </div>}
        </div>
    )
}
