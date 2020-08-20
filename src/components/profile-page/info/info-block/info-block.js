import React from 'react';

import InfoItem from './info-item';

import './info-block.css';

const InfoBlock = ({infoItems}) => {

    const infoItemsData = infoItems.map((item) => {
        return (
            <InfoItem data={item} />
        )
    });

    return (
        <div className="info-block">
            {infoItemsData}
        </div>
    )
};

export default InfoBlock;