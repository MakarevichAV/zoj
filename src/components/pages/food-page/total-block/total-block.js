import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../../../button/button';

import s from './total-block.module.css';

const TotalBlock = () => {

    const saveTotal = () => {
    }

    return (
        <div className={s.container}>
            <h2>Итого за день</h2>
            <div className={s.table}>
                <div className={s.row}>
                    <div className={`${s.name} ${s.noName}`}></div>
                    <div className={s.values}>
                        <div className={s.cell}>Гр</div>
                        <div className={s.cell}>кКал</div>
                        <div className={s.cell}>Б</div>
                        <div className={s.cell}>Ж</div>
                        <div className={s.cell}>У</div>
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.name}>
                        Каша овсянная с маслом
                        <button className={s.btnDel}></button>
                    </div>
                    <div className={s.values}>
                        <div className={s.cell}>350</div>
                        <div className={s.cell}>280</div>
                        <div className={s.cell}>16</div>
                        <div className={s.cell}>8</div>
                        <div className={s.cell}>10</div>
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.name}>
                        Курица запеченная под сыром
                        <button className={s.btnDel}></button>
                    </div>
                    <div className={s.values}>
                        <div className={s.cell}>200</div>
                        <div className={s.cell}>140</div>
                        <div className={s.cell}>12</div>
                        <div className={s.cell}>5</div>
                        <div className={s.cell}>10</div>
                    </div>
                </div>
            </div>
            <div className={s.total}>
                <h2>Всего:</h2>
                <p className={s.totalRow}>
                    <span className={s.key}>Калории: </span>
                    <span className={s.factValue}>2400 кКал</span>
                    <span className={s.targetValue}> / 2400 кКал</span>
                </p> 
                <p className={s.totalRow}>
                    <span className={s.key}>Белки: </span> 
                    <span className={s.factValue}>80 г</span>
                    <span className={s.targetValue}> / 90 г</span>
                </p> 
                <p className={s.totalRow}>
                    <span className={s.key}>Жиры: </span>
                    <span className={s.factValue}>80 г</span>
                    <span className={s.targetValue}> / 90 г</span>
                </p> 
                <p className={s.totalRow}>
                    <span className={s.key}>Углеводы: </span> 
                    <span className={s.factValue}>80 г</span>
                    <span className={s.targetValue}> / 90 г</span>
                </p> 
                <p className={s.totalRow}>
                    <span className={s.key}>Вода: </span> 
                    <span className={s.factValueWater}>2.5 л</span>
                    <span className={s.targetValue}> / 2.8 л</span>
                </p> 
            </div>
            <Button txt="Записать день" classType="type3" onClick={saveTotal} />
        </div>
    )
}

export default TotalBlock;