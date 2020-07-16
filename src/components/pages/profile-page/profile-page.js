import React from 'react';

import SideBar from './side-bar';
import Info from './info';
import s from './profile-page.module.css';

const ProfilePage = (props) => {
    const {userInfo, normsInfo, adviceInfo} = props;
    return (
        <div className={s.container}>
            <SideBar    name="Иванов Иван"
                        userInfo={userInfo}/>
            <Info   title="Рекомендации"
                    normsInfo={normsInfo} 
                    adviceInfo={adviceInfo}/>
        </div>
    )
}

export default ProfilePage;