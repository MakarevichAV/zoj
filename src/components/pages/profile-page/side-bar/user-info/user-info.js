import React from 'react';
import InfoItem from '../../info/info-block/info-item/info-item';
import s from './user-info.module.css';
import Button from '../../../../button/button';

const UserInfo = ({name, userInfoItems}) => {

    const infoItemsData = userInfoItems.map((item) => {
        return (
            <InfoItem data={item} />
        )
    });

    return (
        <div className={s.info}>
            <div className={s.photo}></div>
            <p className={s.name}>{name}</p>
            <div className={s.data}>
                {infoItemsData}
            </div>
            <Button txt="Редактрировать"
                    type="type1"/>
        </div>
    )
}

export default UserInfo;