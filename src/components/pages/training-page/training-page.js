import React from 'react';
import {useSelector} from 'react-redux';
import Title from '../../title/title';
import TrainingSearchBlock from './training-search-block/training-search-block';
import BalanceBlock from './balance-block/balance-block';
import preloader from '../../../preloader.svg';
import s from './training-page.module.css';

const TrainingPage = () => {
    const isLoading = useSelector(state => state.foodInfo.isLoading);
    return (
        <>
            {isLoading ? 
                <div className="preloader">
                    <img src={preloader} />
                </div>
                : null }
            <div className={s.sportPage}>
                <div className={s.wrapper}>
                    <Title label="физическая нагрузка"/>
                </div>
                <div className={s.container}>
                    <TrainingSearchBlock />
                    <BalanceBlock />
                </div>
            </div>
        </>
    )
}

export default TrainingPage;