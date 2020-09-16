import React, {useEffect,useState } from 'react'
import '../../index.css';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { MovieItem } from './MovieItem';
import { getPlanetByName } from '../../selectors/getPlanetByName';


export const PlanetSearch = ({history}) => {
    const location = useLocation();
    const {q=''} = queryString.parse(location.search);
    const [ values, handleInputChange] = useForm({
        textoBusqueda:q,
    });
    const [planets,setPlanet] = useState(null);
    useEffect(() => {
        const getPlanet = async() => {
            if(q===''){
                setPlanet([]);
            }
            else {
                const resp = await getPlanetByName(q);
                setPlanet(resp.results);
            }
        }
        getPlanet();
    }, [q])
    const handleSearch = (e) => {
        e.preventDefault();
        setPlanet(null);
        history.push(`?q=${values.textoBusqueda}`);
        //localStorage.setItem('lastpath', `/search?q=${values.textoBusqueda}`);
    }
    //console.log()
    return (
        <>
            <h1 style={{marginLeft:35}}>Search</h1>
            <hr style={{marginLeft:35}}/>
            <div className="search-screen-container">
                <div className=".search-screen-container-element1">
                <h3>Search for a Planet:</h3>
                <hr/>
                <form onSubmit={handleSearch}>
                <input name="textoBusqueda" type="text" className="form-control" placeholder="..." onChange={handleInputChange} value={values.textoBusqueda} autoComplete='off'/>
                <button className="btn btn-outline-info nuevo">Search...</button>
                </form>
                </div>
                <div className=".search-screen-container-element1">
                <h3>Results</h3>
                <hr/>
                {
                   (planets) ? planets.map( (elemento) =>  <MovieItem key={elemento.name} planet={elemento}/>):<div className="spinner-border m-5" role="status">
                   <span className="sr-only">Loading...</span>
                 </div>
                }
                    
                </div>
            </div>
        </>
    )
}
