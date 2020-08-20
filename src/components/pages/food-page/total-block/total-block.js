import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {delFoodRow, getFoodDairy} from '../../../../context/actions/foodActions';
import TableRow from './table-row/table-row';

import s from './total-block.module.css';
import TotalRow from './total-row/total-row';

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
                <TableRow dish={item.dish} id={item._id} weight={item.weight}
                    calories={item.calories} protein={item.protein} fats={item.fats} 
                    carbo={item.carbohydrates} onClick={deleteRow} />
            )
        }
    });

    return (
        <div className={s.container}>
            <h2>Итого за день</h2>
            <div className={s.table}>
                <TableRow mainRow weight="Гр" calories="кКал" 
                    protein="Бел, г" fats="Жир, г" carbo="Угл, г"/>
                {foodList}
            </div>
            <div className={s.total}>
                <h2>Всего:</h2>
                <TotalRow text="Калории" factVal={sumEnergy} targetVal={dailyRate.e} unit="кКал"/>
                <TotalRow text="Белки" factVal={sumProtein} targetVal={dailyRate.p} unit="г"/>
                <TotalRow text="Жиры" factVal={sumFat} targetVal={dailyRate.f} unit="г"/>
                <TotalRow text="Углеводы" factVal={sumC} targetVal={dailyRate.c} unit="г"/>
                <TotalRow text="Вода" factVal={data.sum} targetVal={dailyRate.w} unit="л" water/>
            </div>
        </div>
    )
}

export default TotalBlock;