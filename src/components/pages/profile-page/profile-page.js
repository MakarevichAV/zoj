import React from 'react';

import SideBar from './side-bar';
import Info from './info';
import './profile-page.css';

const ProfilePage = (props) => {
    const {userInfo, normsInfo, adviceInfo} = props;
    return (
        <div className="container">
            <SideBar    name="Иванов Иван"
                        userInfo={userInfo}/>
            <Info   title="Рекомендации"
                    normsInfo={normsInfo} 
                    adviceInfo={adviceInfo}/>
        </div>
    )
}

export default ProfilePage;