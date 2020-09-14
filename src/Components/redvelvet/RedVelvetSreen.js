import React from 'react';
import { IdolList } from '../idols/IdolList';

export const RedVelvetSreen = () => {
    localStorage.setItem('lastpath', '/redvelvet');
    return (
        <div>
            <h1 style={{marginLeft:35}}>Red Velvet</h1>
            <hr/>
            <IdolList group="Red Velvet"></IdolList>
        </div>
    )
}
