import React from 'react'
import { Link } from 'react-router-dom'

export const MovieItem = ({planet}) => {
    return (
        <div className="card mb-3 carta" style={{maxWidth: 400}}>
        <div className="row no-gutters">
          <div className="col-md-4">
          <img src={`./assets/planets/${(planet.name).replace(/ /g,"-")}.png`} onError={(e)=>{e.target.onerror = null; e.target.src="./assets/planets/planetx.png"}} className="card-img-top animate__animated animate__flipInY" alt={planet.name}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
    <       h5 className="card-title">{(planet.name).replace(/ /g,"-")}</h5>
          <p className="card-text"> <strong>Climate: </strong>{planet.climate}</p>
          <p className="card-text"> <strong>Diameter: </strong>{planet.diameter}</p>
          <Link to={`planet/${planet.name}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
        
    )
}
