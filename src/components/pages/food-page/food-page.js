import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import InfoItem from '../../info-item/info-item';
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

    let barWidth = data.length * 120; // ширина графика

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
                    {/* <div className={s.dailyRate}>
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
                            underline 
                            blue/>    
                    </div> */}
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