import React from 'react';

import UserInfo from './user-info/user-info';

import s from './side-bar.module.css';

const SideBar = ({name, userInfo}) => {
    return (
        <div className={s.sideBar}>
            <UserInfo   name={name}
                        userInfoItems={userInfo}/>
        </div>
    )
}

export default SideBar;