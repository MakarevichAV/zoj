import React from 'react';
import InfoItem from '../../../info-item/info-item';
import {useSelector} from 'react-redux';
import s from './daily-rate-block.module.css';

const DailyRateBlock = () => {

    const dailyRate = useSelector(state => state.userInfo.dailyRate);

    return (
        <div className={s.dailyRate}>
            <InfoItem   name="Суточная норма" 
                        value unit head/>
            <InfoItem   name="кКал" 
                        value={dailyRate.e} 
                        unit underline/>
            <InfoItem   name="Белки" 
                        value={dailyRate.p} 
                        unit="г" underline/>
            <InfoItem   name="Жиры" 
                        value={dailyRate.f} 
                        unit="г" underline/>
            <InfoItem   name="Углеводы" 
                        value={dailyRate.c} 
                        unit="г" underline/>
            <InfoItem   name="Вода" 
                        value={dailyRate.w} 
                        unit="л" 
                        underline blue/>    
        </div>
    )
}

export default DailyRateBlock;