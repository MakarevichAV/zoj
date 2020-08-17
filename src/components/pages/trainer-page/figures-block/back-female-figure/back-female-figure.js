import React from 'react';
import s from './back-female-figure.module.css';
import '../sectors.css';
import backFemaleFigure from '../../img/back-female-figure.png';

const BackFemaleFigure = () => {
    return (
        <div className={s.figure}>
            <img className={s.mainImg} src={backFemaleFigure} />
        </div>
    )
}

export default BackFemaleFigure;