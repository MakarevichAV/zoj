import React from 'react';
import InfoItem from '../../../info-item/info-item';
// import {useSelector} from 'react-redux';
import s from './balance-block.module.css';

const BalanceBlock = () => {

    // const dailyRate = useSelector(state => state.userInfo.dailyRate);

    return (
        <div className={s.balanceBlock}>
            <InfoItem   name="Баланс калорий" 
                        value unit head/>
            <InfoItem   name="кКал" 
                        value="+1400" 
                        unit underline
                        red/> 
        </div>
    )
}

export default BalanceBlock;