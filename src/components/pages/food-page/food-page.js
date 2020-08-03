import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import InfoItem from '../info-item/info-item';
import WaterBlock from './water-block/water-block'
import TotalBlock from './total-block/total-block'
import Chart from './chart/chart'
import s from './food-page.module.css';

import FoodSearchBlock from './food-search-block/food-search-block';
import Title from '../../title/title';

const FoodPage = () => {
    const dailyRate = useSelector(state => state.userInfo.dailyRate);
    return (
        <div className={s.foodPage}>
            <div className={s.wrapper}>
                <Title label="питание"/>
            </div>
            <div className={s.container}>
                <FoodSearchBlock />
                <div className={s.dailyRate}>
                    <InfoItem 
                        name="Суточная норма" 
                        value 
                        unit
                        head/>
                    <InfoItem 
                        name="кКал" 
                        value={dailyRate.e} 
                        unit
                        underline/>
                    <InfoItem 
                        name="Белки" 
                        value={dailyRate.p} 
                        unit="г" 
                        underline/>
                    <InfoItem 
                        name="Жиры" 
                        value={dailyRate.f} 
                        unit="г" 
                        underline/>
                    <InfoItem 
                        name="Углеводы" 
                        value={dailyRate.c} 
                        unit="г" 
                        underline/>
                    <InfoItem 
                        name="Вода" 
                        value={dailyRate.w} 
                        unit="л" 
                        underline blue/>    
                </div>
            </div>
            <div className={s.container}>
                <WaterBlock />
            </div>
            <div className={s.container}>
                <TotalBlock />
            </div>
            <div className={s.container}>
                <Chart />
            </div>
        </div>
    )
}

export default FoodPage;