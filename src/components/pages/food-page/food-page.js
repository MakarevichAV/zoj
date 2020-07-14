import React from 'react';
import './food-page.css';

import FoodSearchBlock from './food-search-block';
import Title from '../../title';

const FoodPage = () => {
    return (
        <div className="food-page">
            <div className="wrapper">
                <Title label="питание"/>
            </div>
            <div className="container">
                <FoodSearchBlock />
                <div className="daily-rate"></div>
            </div>
        </div>
    )
}

export {FoodPage};