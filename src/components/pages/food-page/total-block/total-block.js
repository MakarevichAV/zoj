import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../../../button/button';

import s from './total-block.module.css';

const TotalBlock = () => {

    const dailyRate = useSelector(state => state.userInfo.dailyRate);
    const data = useSelector(state => state.waterInfo);
    const food = useSelector(state => state.foodInfo);
    
    const foodList = food.food.map((item) => {
        return (
            <div className={s.row}>
                <div className={s.name}>
                    {item.name}
                    <button className={s.btnDel}></button>
                </div>
                <div className={s.values}>
                    <div className={s.cell}>{item.num}</div>
                    <div className={s.cell}>{item.e}</div>
                    <div className={s.cell}>{item.p}</div>
                    <div className={s.cell}>{item.f}</div>
                    <div className={s.cell}>{item.c}</div>
                </div>
            </div>
        )
    });

    // рассчет суммарных значений КБЖУ
    let sumEnergy = 0;
    let sumProtein = 0;
    let sumFat = 0;
    let sumC = 0;
    food.food.forEach((item) => {
        sumEnergy = sumEnergy + item.e;
        sumProtein = sumProtein + item.p;
        sumFat = sumFat + item.f;
        sumC = sumC + item.c;
    });

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
                {foodList[0] ? foodList : 
                    <div className={s.row}>
                        <div className={s.name}></div>
                        <div className={s.values}>
                            <div className={s.cell}></div>
                            <div className={s.cell}></div>
                            <div className={s.cell}></div>
                            <div className={s.cell}></div>
                            <div className={s.cell}></div>
                        </div>
                    </div>
                }
            </div>
            <div className={s.total}>
                <h2>Всего:</h2>
                <p className={s.totalRow}>
                    <span className={s.key}>Калории: </span>
                    <span className={s.factValue}>{sumEnergy} кКал</span>
                    <span className={s.targetValue}> / {dailyRate.e} кКал</span>
                </p> 
                <p className={s.totalRow}>
                    <span className={s.key}>Белки: </span> 
                    <span className={s.factValue}>{sumProtein} г</span>
                    <span className={s.targetValue}> / {dailyRate.p} г</span>
                </p> 
                <p className={s.totalRow}>
                    <span className={s.key}>Жиры: </span>
                    <span className={s.factValue}>{sumFat} г</span>
                    <span className={s.targetValue}> / {dailyRate.f} г</span>
                </p> 
                <p className={s.totalRow}>
                    <span className={s.key}>Углеводы: </span> 
                    <span className={s.factValue}>{sumC} г</span>
                    <span className={s.targetValue}> / {dailyRate.c} г</span>
                </p> 
                <p className={s.totalRow}>
                    <span className={s.key}>Вода: </span> 
                    <span className={s.factValueWater}>{data.sum} л</span>
                    <span className={s.targetValue}> / {dailyRate.w} л</span>
                </p> 
            </div>
            <Button txt="Записать день" classType="type3" onClick={saveTotal} />
        </div>
    )
}

export default TotalBlock;