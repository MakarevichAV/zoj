import React from 'react';
import {useSelector} from 'react-redux';
import DailyRateBlock from './daily-rate-block/daily-rate-block';
import WaterBlock from './water-block/water-block'
import TotalBlock from './total-block/total-block'
import Chart from './chart/chart'
import preloader from '../../../preloader.svg';
import s from './food-page.module.css';

import FoodSearchBlock from './food-search-block/food-search-block';
import Title from '../../title/title';

const FoodPage = () => {
    const dailyRate = useSelector(state => state.userInfo.dailyRate);
    const arrForGraph = useSelector(state => state.foodInfo.arrForGraph);
    const isLoading = useSelector(state => state.foodInfo.isLoading);

    // Данные для графика
    const data = arrForGraph.map((item) => {
        return {
            name: item.date,
            'Потребленные кКал': item.calories,
            'Рекомендуемое значение': dailyRate.e
        }
    });
    
    // ширина графика
    let barWidth = data.length * 120;

    return (
        <>
            {isLoading ? 
                <div className="preloader">
                    <img src={preloader} />
                </div>
                : null }
            <div className={s.foodPage}>
                <div className={s.wrapper}>
                    <Title label="питание"/>
                </div>
                <div className={s.container}>
                    <FoodSearchBlock />
                    <DailyRateBlock />
                </div>
                <div className={s.container}>
                    <WaterBlock />
                </div>
                <div className={s.container}>
                    <TotalBlock />
                </div>
                <div className={s.container}>
                    <Chart barWidth={barWidth} data={data} />
                </div>
            </div>
        </>
    )
}

export default FoodPage;