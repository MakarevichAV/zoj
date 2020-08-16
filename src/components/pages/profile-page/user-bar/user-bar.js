import React from 'react';
import {useSelector} from 'react-redux'; 

import UserInfo from './user-info/user-info';
import UserInfoEdit from './user-info-edit/user-info-edit';

import s from './user-bar.module.css';

const UserBar = () => {
    const edit = useSelector(state => state.userInfo.edit);
    return (
        <div className={s.sideBar}>
            {!edit ? <UserInfo /> : <UserInfoEdit />}
        </div>
    )
}

export default UserBar;