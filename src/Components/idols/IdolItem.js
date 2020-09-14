import React from 'react'
import { Link } from 'react-router-dom';

export const IdolItem = ({idol}) => {
    return (
        <div className="card mb-3 carta" style={{maxWidth: 400}}>
        <div className="row no-gutters">
          <div className="col-md-4">
          <img src={`/assets/idols/${idol.id}.jpg`} className="card-img-top animate__animated animate__flipInY" alt={idol.name}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title">{idol.artname}</h5>
          <p className="card-text"> <strong>Real Name: </strong>{idol.name}</p>
          <p className="card-text"> <strong>Group: </strong>{idol.group}</p>
          <Link to={`idol/${idol.id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
        
    )
}
