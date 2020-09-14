import React from 'react'
import { AppRouter } from './routers/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {
        logged:false
    }
}
export const SWApp = () => {
    
    return (
            <AppRouter/>  
    )
}
