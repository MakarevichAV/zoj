import React from 'react';
import s from './list-item.module.css';

const ListItem = ({id, listItemValue, item, brand, onSetCurrent}) => {
    return (
        <p className={s.item} id={id} onClick={() => onSetCurrent(item)}>
            {listItemValue}  {brand ?  <span> - {brand}</span> : false}
        </p>
    )
}

export default ListItem;