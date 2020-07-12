import React from 'react';

import InfoItem from '../../info/info-block/info-item';

import './user-info.css';

import Button from '../../../../button';

const UserInfo = ({name, userInfoItems}) => {

    const infoItemsData = userInfoItems.map((item) => {
        return (
            <InfoItem data={item} />
        )
    });

    return (
        <div className="user-info">
            <div className="user-photo"></div>
            <p className="user-name">{name}</p>
            <div className="user-data">
                {infoItemsData}
            </div>
            <Button txt="Редактрировать"
                    type="type-1"/>
        </div>
    )
}

export default UserInfo;