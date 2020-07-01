import React from 'react';

import InfoBlock from './info-block';

import './info.css';

const Info = ({name, ...infoBlockItems}) => {

    return (
        <div className="info">
            <div className="info-container">
                <p className="name">{name}</p>
                <InfoBlock infoItems={infoBlockItems.personInfo} />
                <InfoBlock infoItems={infoBlockItems.targetInfo} />
                <InfoBlock infoItems={infoBlockItems.adviceInfo} />
            </div>
        </div>
    )
}

export default Info;