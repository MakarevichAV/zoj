import React from 'react';
import s from './list-item.module.css';

const ListItem = ({id, listItemValue, getFood}) => {
    return (
        <p className={s.item} id={id} onClick={getFood}>{listItemValue}</p>
    )
}

export default ListItem;