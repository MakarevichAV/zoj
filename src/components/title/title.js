import React from 'react';

import './title.css';

const Title = ({label}) => {
    let date = new Date(),
        day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate(),
        month = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1),
        year = date.getFullYear();

    return (
        <div className="title">
            <p>{label}</p>
            <p className="date">{day + '.' + month + '.' + year}</p>
        </div>
    )
}

export default Title;