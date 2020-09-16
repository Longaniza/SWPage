import React from 'react'
import { Link, NavLink} from 'react-router-dom'

export const Navbar = () => {
    const publico = process.env.PUBLIC_URL;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to={publico + "/"}>
            <img src="./assets/planets/SWLogo.png" width="50"  alt="" loading="lazy"/>
            </Link>


            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={publico + "/movie1"}
                    >
                        Episode IV
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={publico + "/movie2"}
                    >
                        Episode V
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={publico + "/movie3"}
                    >
                        Episode VI
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={publico + "/movie4"}
                    >
                        Episode I
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={publico + "/movie5"}
                    >
                        Episode II
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={publico + "/movie6"}
                    >
                        Episode III
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={publico + "/search"}
                    >
                        Search
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}