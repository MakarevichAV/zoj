import React from 'react';

import InfoBlock from './info-block';

import './info.css';

const Info = ({title, ...infoBlockItems}) => {

    return (
        <div className="info">
            <div className="info-container">
                <p className="name">{title}</p>
                <InfoBlock infoItems={infoBlockItems.normsInfo} />
                <InfoBlock infoItems={infoBlockItems.adviceInfo} />
            </div>
        </div>
    )
}

export default Info;