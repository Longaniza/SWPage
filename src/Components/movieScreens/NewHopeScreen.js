import React, { useEffect,useState } from 'react'
import { getPlanetsByMovie } from '../../selectors/getPlanetsByMovie'
import { MovieList } from './MovieList';
import { getPlanetByName } from '../../selectors/getPlanetByName';
export const NewHopeScreen = () => {
    
    return (
        <div>
            <h1 style={{marginLeft:35}}>Star Wars: Episode IV – A New Hope</h1>
            <hr/>
            <MovieList idMovie="1"></MovieList> 
        </div>
            
    )
}
