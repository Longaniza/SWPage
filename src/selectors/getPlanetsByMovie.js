import React from 'react'

export const getPlanetsByMovie = async(movieNum) => {
    const planets=[]; 
    const resp = await fetch(`https://swapi.dev/api/films/${movieNum}/`);
    const movie = await resp.json();
    for(const planetURL of movie.planets){
        const resp = await fetch(planetURL);
        const planet = await resp.json();
        console.log(planet);
        planets.push(planet);
    }
    return planets;
}

