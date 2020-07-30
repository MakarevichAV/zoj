import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import s from './total-block.module.css';

const TotalBlock = () => {
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
                    <div className={s.name}>Каша овсянная с маслом</div>
                    <div className={s.values}>
                        <div className={s.cell}>350</div>
                        <div className={s.cell}>280</div>
                        <div className={s.cell}>16</div>
                        <div className={s.cell}>8</div>
                        <div className={s.cell}>10</div>
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.name}>Курица запеченная под сыром</div>
                    <div className={s.values}>
                        <div className={s.cell}>200</div>
                        <div className={s.cell}>140</div>
                        <div className={s.cell}>12</div>
                        <div className={s.cell}>5</div>
                        <div className={s.cell}>10</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalBlock;