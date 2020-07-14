import React from 'react';

import InfoBlock from './info-block';

import './info.css';

// import FoodService from '../../../services/food-service';

const Info = ({title, ...infoBlockItems}) => {

    // const foodService = new FoodService();
    
    // const allFood = foodService.getAllFood();
    // console.log(allFood);

    // const names = allFood.map((val) => {
    //     return <p id={val.id}>{val.name}</p>;
    // });
    

    return (
        <div className="info">
            <div className="info-container">
                <p className="name">{title}</p>
                <InfoBlock infoItems={infoBlockItems.normsInfo} />
                <InfoBlock infoItems={infoBlockItems.adviceInfo} />
                {/* {names} */}
            </div>
        </div>
    )
}

export default Info;