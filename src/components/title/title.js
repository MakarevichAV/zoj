import React from 'react';

import s from './title.module.css';

const Title = ({label}) => {
    let date = new Date(),
        day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate(),
        month = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1),
        year = date.getFullYear();

    return (
        <div className={s.titleBlock}>
            <p className={s.title}>{label}</p>
            <p className={`${s.title} ${s.date}`}>{day + '.' + month + '.' + year}</p>
        </div>
    )
}

export default Title;