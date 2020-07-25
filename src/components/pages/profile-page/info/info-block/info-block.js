import React from 'react';
import InfoItem from './info-item/info-item';
import s from './info-block.module.css';

const InfoBlock = ({infoItems}) => {

    const infoItemsData = infoItems.map((item) => {
        return (
            <InfoItem data={item} />
        )
    });

    return (
        <div className={s.infoBlock}>
            {infoItemsData}
        </div>
    )
};

export default InfoBlock;