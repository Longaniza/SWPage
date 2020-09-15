import React, { useEffect,useState } from 'react'
import { getPlanetsByMovie } from '../../selectors/getPlanetsByMovie'
import { MovieList } from './MovieList';
import { getPlanetByName } from '../../selectors/getPlanetByName';
export const NewHopeScreen = () => {
    getPlanetByName('Yavin IV');
    return (
            <MovieList idMovie="1"></MovieList> 
    )
}
