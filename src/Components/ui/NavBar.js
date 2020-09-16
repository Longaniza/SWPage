import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
            <img src="/assets/planets/SWLogo.png" width="50"  alt="" loading="lazy"/>
            </Link>


            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/movie1"
                    >
                        Episode IV
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/movie2"
                    >
                        Episode V
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/movie3"
                    >
                        Episode VI
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/movie4"
                    >
                        Episode I
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/movie5"
                    >
                        Episode II
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/movie6"
                    >
                        Episode III
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}