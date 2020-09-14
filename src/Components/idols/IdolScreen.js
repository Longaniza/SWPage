import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getIdolsById } from '../../selectors/getIdolsById';
import '../../index.css'


export const IdolScreen = ({history}) => {
    const {idolId} = useParams();
    localStorage.setItem('lastpath', `/idol/${idolId}`);
    const idol = useMemo(() =>getIdolsById(idolId), [idolId]);

    const handleClick = () => {
        if(history.length<=2){
            history.push('/');
        }
        else{
            history.goBack();
        }
    };
    return (
        <div className="vista-individual">
        <div className="card mb-3 carta animate__animated animate__fadeInLeft" style={{maxWidth: 400}}>
        <div className="row no-gutters">
          <div className="col-md-4">
          <img src={`../assets/idols/${idol.id}.jpg`} className="card-img-top" alt={idol.name}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title">{idol.artname}</h5>
          <p className="card-text"> <strong>Real Name: </strong>{idol.name}</p>
          <p className="card-text"> <strong>Birth Date: </strong>{idol.birthdate}</p>
          <p className="card-text"> <strong>Birth Place:  </strong>{idol.birthplace}</p>
          <p className="card-text"> <strong>Group: </strong>{idol.group}</p>
          <button className="btn btn-outline-info" onClick={handleClick}>Return</button>
            </div>
          </div>
        </div>
      </div>
      </div>
        
    )
}
