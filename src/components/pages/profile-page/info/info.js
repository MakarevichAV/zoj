import React from 'react';
import InfoBlock from './info-block';
import s from './info.module.css';

const Info = ({title, ...infoBlockItems}) => {

    return (
        <div className={s.info}>
            <div className={s.container}>
                <p className={s.name}>{title}</p>
                <InfoBlock infoItems={infoBlockItems.normsInfo} />
                <InfoBlock infoItems={infoBlockItems.adviceInfo} />
            </div>
        </div>
    )
}

export default Info;