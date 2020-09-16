import React from 'react'
import { MovieList } from './MovieList'

export const ReturnJediScreen = () => {
    return (
        <div>
            <h1 style={{marginLeft:35}}>Star Wars: Episode VI – Return of the Jedi</h1>
            <hr/>
            <MovieList idMovie="3"></MovieList> 
        </div>
            
    )
}
