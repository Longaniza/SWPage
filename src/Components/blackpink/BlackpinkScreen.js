import React from 'react';
import { IdolList } from '../idols/IdolList';

export const BlackpinkScreen = () => {
    localStorage.setItem('lastpath', '/blackpink');
    return (
        <div>
            <h1 style={{marginLeft:35}}>Blackpink</h1>
            <hr/>
            <IdolList group="Blackpink"></IdolList>
        </div>
    )
}
