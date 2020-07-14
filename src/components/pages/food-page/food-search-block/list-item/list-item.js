import React from 'react';
import './list-item.css';

const ListItem = ({id, listItemValue}) => {
    return (
        <p className="list-item" id={id}>{listItemValue}</p>
    )
}

export default ListItem;