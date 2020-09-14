import React from 'react';
import { IdolList } from '../idols/IdolList';

export const GidleScreen = () => {
    localStorage.setItem('lastpath', '/gidle');
    return (
        <div>
            <h1 style={{marginLeft:35}}>(G)I-DLE</h1>
            <hr/>
            <IdolList group="(G)I-DLE"></IdolList>
        </div>
    )
}
