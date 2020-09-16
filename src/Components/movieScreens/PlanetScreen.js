import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPlanetsByMovie } from '../../selectors/getPlanetsByMovie';
import { getPlanetByName } from '../../selectors/getPlanetByName';

export const PlanetScreen = ({history}) => {
    const {planetName} = useParams();
    //localStorage.setItem('lastpath', `/movie/${movieId}`);
    const [planet,setPlanet] = useState(null);
    useEffect(() => {
        const getPlanet = async() => {
            const resp = await getPlanetByName(planetName);
            console.log(resp.results[0]);
            setPlanet(resp.results[0]);
        }
        getPlanet();
    }, [planetName])
   
    const handleClick = () => {
        if(history.length<=2){
            history.push('/');
        }
        else{
            history.goBack();
        }
    };
    return (
      <div>
            {(planet) ? <div className="vista-individual">
        <div className="card mb-3 carta animate__animated animate__fadeInLeft" style={{maxWidth: 400}}>
        <div className="row no-gutters">
          <div className="col-md-4">
          <img src={`../assets/planets/${(planet.name).replace(/ /g,"-")}.png`} onError={(e)=>{e.target.onerror = null; e.target.src="/assets/planets/planetx.png"}} className="card-img-top" alt={planet.name}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title">{planet.name}</h5>
            <p className="card-text"> <strong>Climate: </strong>{planet.climate}</p>
          <p className="card-text"> <strong>Diameter: </strong>{planet.diameter}</p>
          <p className="card-text"> <strong>Gravity: </strong>{planet.gravity}</p>
          <p className="card-text"> <strong>Orbital period: </strong>{planet.orbital_period}</p>
          <p className="card-text"> <strong>Population </strong>{planet.population}</p>
          <p className="card-text"> <strong>Rotation period: </strong>{planet.rotation_period}</p>
          <p className="card-text"> <strong>Surface water: </strong>{planet.surface_water}</p>
          <p className="card-text"> <strong>Terrain: </strong>{planet.terrain}</p>
          <button className="btn btn-outline-info" onClick={handleClick}>Return</button>
            </div>
          </div>
        </div>
      </div>
      </div>:<div class="d-flex justify-content-center m-5">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>}
      </div>
    )        
    
}
