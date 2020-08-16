import React from 'react';
import s from './total-row.module.css';

const TotalRow = ({text, factVal, targetVal, unit, water}) => {
    return (
        <p className={s.totalRow}>
            <span className={s.key}>{text}: </span>
            <span className={`${s.factValue} ${water ? s.factValueWater : null}`}>{factVal} {unit}</span>
            <span className={s.targetValue}> / {targetVal} {unit}</span>
        </p>
    )
}

export default TotalRow;