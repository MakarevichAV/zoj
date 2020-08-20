import React from 'react';
import s from './crose.module.css';

const Crose = ({onClick}) => {
    return (
        <button className={s.crose} onClick={onClick}></button>
    )
}

export default Crose;