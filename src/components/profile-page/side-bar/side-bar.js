import React from 'react';

import UserInfo from './user-info';

import './side-bar.css';

const SideBar = ({name, userInfo}) => {
    return (
        <div className="side-bar">
            <UserInfo   name={name}
                        userInfoItems={userInfo}/>
        </div>
    )
}

export default SideBar;