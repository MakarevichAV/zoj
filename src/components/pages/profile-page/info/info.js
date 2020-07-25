import React from 'react';
// import InfoBlock from './info-block/info-block';
import {useDispatch, useSelector} from 'react-redux';
import InfoItem from '../info-item/info-item';
import s from './info.module.css';

const Info = () => {

    const normsInfo = useSelector(state => state.userInfo.normsInfo);
    const dailyRate = useSelector(state => state.userInfo.dailyRate);

    return (
        <div className={s.info}>
            <div className={s.container}>
                <p className={s.name}>Рекомендации</p>
                <div className={s.infoBlock}>
                    <InfoItem 
                        name="Норма веса" 
                        value={normsInfo.minWeight + ' - ' + normsInfo.maxWeight} 
                        unit="кг" 
                        underline
                        important/>
                    <InfoItem 
                        name="Оптимальный вес" 
                        value={normsInfo.optWeight} 
                        unit="кг" 
                        underline
                        important/>
                </div>
                <div className={s.infoBlock}>
                    <InfoItem 
                        name="Суточная норма" 
                        value 
                        unit
                        head/>
                    <InfoItem 
                        name="Калории" 
                        value={dailyRate.e} 
                        unit="кКал/день" 
                        underline/>
                    <InfoItem 
                        name="Белки" 
                        value={dailyRate.p} 
                        unit="г/день" 
                        underline/>
                    <InfoItem 
                        name="Жиры" 
                        value={dailyRate.f} 
                        unit="г/день" 
                        underline/>
                    <InfoItem 
                        name="Углеводы" 
                        value={dailyRate.c} 
                        unit="г/день" 
                        underline/>
                    <InfoItem 
                        name="Вода" 
                        value={dailyRate.w} 
                        unit="л/день" 
                        underline blue/>    
                </div>
                {/* <InfoBlock infoItems={normsInfo} /> */}
                {/* <InfoBlock infoItems={dailyRate} /> */}
            </div>
        </div>
    )
}

export default Info;