import React, { useMemo } from 'react';
import { getIdolsByGroup } from '../../selectors/getIdolsByGroup';
import { IdolItem } from './IdolItem';
import '../../index.css';

export const IdolList = ({group}) => {
    const idolos = useMemo(() => getIdolsByGroup(group),[group]);
    return (
        <div className="grupo">
            {idolos.map((elemento) => <IdolItem 
            key={elemento.id} idol={elemento}/>)}
        </div>
    )
}
