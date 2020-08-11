import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {delFoodRow, getFoodDairy} from '../../../../context/actions/foodActions';
import Button from '../../../button/button';

import s from './total-block.module.css';

const TotalBlock = () => {
    const dispatch = useDispatch();
    const dailyRate = useSelector(state => state.userInfo.dailyRate);
    const data = useSelector(state => state.waterInfo);
    const food = useSelector(state => state.foodInfo);

    const deleteRow = (e) => {
        if (window.confirm("Вы точно хотите удалить строку?")) {
            dispatch(delFoodRow({
                foodArr: food.food,
                id: e.target.id
            }));
            dispatch(getFoodDairy());
        }
    }
    
    // const foodList = food.food.map((item, key) => {
    //     return (
    //         <div className={s.row} key={key}>
    //             <div className={s.name}>
    //                 {item.dish}
    //                 <button id={item._id} className={s.btnDel} onClick={deleteRow}></button>
    //             </div>
    //             <div className={s.values}>
    //                 <div className={s.cell}>{item.weight}</div>
    //                 <div className={s.cell}>{item.calories}</div>
    //                 <div className={s.cell}>{item.protein}</div>
    //                 <div className={s.cell}>{item.fats}</div>
    //                 <div className={s.cell}>{item.carbohydrates}</div>
    //             </div>
    //         </div>
    //     )
    // });

    const date = new Date();
    const year = date.getFullYear();
    const month = Number(date.getMonth()) + 1;
    const day = date.getDate();
    const nowDate = year + '-' + 
                    (month < 10 ? '0' + month : month) + '-' + 
                    (day < 10 ? '0' + day : day);
    let sumEnergy = 0;
    let sumProtein = 0;
    let sumFat = 0;
    let sumC = 0;
    food.food.forEach((item, i) => {
        if (nowDate === item.userDate.substring(0, 10)) {
            sumEnergy = sumEnergy + +item.calories;
            sumProtein = sumProtein + +item.protein;
            sumFat = sumFat + +item.fats;
            sumC = sumC + +item.carbohydrates;
        }
    });
  
    const foodList = food.food.map((item, key) => {
        if (nowDate === item.userDate.substring(0, 10)) {
            return (
                <div className={s.row}>
                    <div className={s.name}>
                        {item.dish}
                        <button id={item._id} className={s.btnDel} onClick={deleteRow}></button>
                    </div>
                    <div className={s.values}>
                        <div className={s.cell}>{item.weight}</div>
                        <div className={s.cell}>{item.calories}</div>
                        <div className={s.cell}>{item.protein}</div>
                        <div className={s.cell}>{item.fats}</div>
                        <div className={s.cell}>{item.carbohydrates}</div>
                    </div>
                </div>
            )
        }
    });

    return (
        <div className={s.container}>
            <h2>Итого за день</h2>
            <div className={s.table}>
                <div className={s.row}>
                    <div className={`${s.name} ${s.noName}`}></div>
                    <div className={s.values}>
                        <div className={s.cell}>Гр</div>
                        <div className={s.cell}>кКал</div>
                        <div className={s.cell}>Бел, г</div>
                        <div className={s.cell}>Жир, г</div>
                        <div className={s.cell}>Угл, г</div>
                    </div>
                </div>
                {foodList}
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
        </div>
    )
}

export default TotalBlock;