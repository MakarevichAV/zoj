import React from 'react';

import SideBar from './side-bar/side-bar';
import Info from './info/info';
import s from './profile-page.module.css';

const ProfilePage = () => {
    // const {userInfo, normsInfo, adviceInfo} = props;
    return (
        <div className={s.container}>
            <SideBar />
            <Info />
        </div>
    )
}

export default ProfilePage;