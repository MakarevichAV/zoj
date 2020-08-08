import React from 'react';
import s from './list-item.module.css';

const ListItem = ({id, listItemValue}) => {
    return (
        <p className={s.item} id={id}>{listItemValue}</p>
    )
}

export default ListItem;