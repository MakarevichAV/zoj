import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './food-page.module.css';

import FoodSearchBlock from './food-search-block/food-search-block';
import Title from '../../title/title';

const FoodPage = () => {
    return (
        <div className={s.foodPage}>
            <div className={s.wrapper}>
                <Title label="питание"/>
            </div>
            <div className={s.container}>
                <FoodSearchBlock />
                <div className={s.dailyRate}></div>
            </div>
        </div>
    )
}

export default FoodPage;