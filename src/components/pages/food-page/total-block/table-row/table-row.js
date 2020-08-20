import React from 'react';
import s from './table-row.module.css';

const TableRow = ({mainRow, dish, id, weight, calories, protein, fats, carbo, onClick}) => {
    return (
        <div className={s.row}>
            {mainRow ? 
                <div className={`${s.name} ${s.noName}`}></div> :
                <div className={s.name}>
                    {dish}
                    <button id={id} className={s.btnDel} onClick={onClick}></button>
                </div>
            }
            <div className={s.values}>
                <div className={s.cell}>{weight}</div>
                <div className={s.cell}>{calories}</div>
                <div className={s.cell}>{protein}</div>
                <div className={s.cell}>{fats}</div>
                <div className={s.cell}>{carbo}</div>
            </div>
        </div>
    )
}

export default TableRow;