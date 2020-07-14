import React from 'react';
import './food-page.css';

import FoodSearchBlock from './food-search-block';
import Title from '../../title';

const FoodPage = () => {
    return (
        <div className="food-page">
            <Title label="питание"/>
            <div className="container">
                <FoodSearchBlock />
                <div className="daily-rate"></div>
            </div>
        </div>
    )
}

export {FoodPage};