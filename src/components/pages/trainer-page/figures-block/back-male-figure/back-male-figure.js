import React from 'react';
import s from './back-male-figure.module.css';
import '../sectors.css';
import backMaleFigure from '../../img/back-male-figure.png';

const BackMaleFigure = () => {
    return (
        <div className={s.figure}>
            <img className={s.mainImg} src={backMaleFigure} />
        </div>
    )
}

export default BackMaleFigure;