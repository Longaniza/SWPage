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
          <img src={`../assets/planets/${(planet.name).replace(/ /g,"-")}.png`} className="card-img-top" alt={planet.name}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title">{planet.name}</h5>
          <p className="card-text"> <strong>Real Name: </strong>{planet.name}</p>
          <p className="card-text"> <strong>Birth Date: </strong>{planet.name}</p>
          <p className="card-text"> <strong>Birth Place:  </strong>{planet.name}</p>
          <p className="card-text"> <strong>Group: </strong>{planet.name}</p>
          <button className="btn btn-outline-info" onClick={handleClick}>Return</button>
            </div>
          </div>
        </div>
      </div>
      </div>:<h1>Hola mundo</h1>}
      </div>
    )        
    
}
