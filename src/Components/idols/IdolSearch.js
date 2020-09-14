import React, {useMemo, useRef } from 'react'
import '../../index.css';
import { IdolItem } from './IdolItem';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getIdolsBySearch } from '../../selectors/getIdolsBySearch';

export const IdolSearch = ({history}) => {
    const location = useLocation();
    const {q=''} = queryString.parse(location.search);
    const [ values, handleInputChange] = useForm({
        textoBusqueda:q,
    });
    const realidad = useRef(false);
    const idolos = useMemo(()=> {
        realidad.current=true;
        console.log(getIdolsBySearch(values.textoBusqueda));
        return getIdolsBySearch(values.textoBusqueda)
    },[values.textoBusqueda]);
    const idolos2 = useMemo(()=> {
        realidad.current=false;
        return getIdolsBySearch(q);
    },[q]);
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${values.textoBusqueda}`);
        localStorage.setItem('lastpath', `/search?q=${values.textoBusqueda}`);
    }
    //console.log()
    return (
        <>
            <h1 style={{marginLeft:35}}>Search</h1>
            <hr style={{marginLeft:35}}/>
            <div className="search-screen-container">
                <div className=".search-screen-container-element1">
                <h3>Search for an Idol:</h3>
                <hr/>
                <form onSubmit={handleSearch}>
                <input name="textoBusqueda" type="text" className="form-control" placeholder="..." onChange={handleInputChange} value={realidad.current? values.textoBusqueda:q}/>
                <button className="btn btn-outline-info nuevo">Search...</button>
                </form>
                </div>
                <div className=".search-screen-container-element1">
                <h3>Results</h3>
                <hr/>
                {
                    (realidad.current ? idolos.map( (elemento) =>  <IdolItem key={elemento.id} idol={elemento}/>):idolos2.map( (elemento) =>  <IdolItem key={elemento.id} idol={elemento}/>))
                }
                    
                </div>
            </div>
        </>
    )
}
