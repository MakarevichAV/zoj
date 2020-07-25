import React from 'react';
import {useDispatch, useSelector} from 'react-redux'; 

import UserInfo from './user-info/user-info';
import UserInfoEdit from './user-info-edit/user-info-edit';

import s from './side-bar.module.css';

const SideBar = () => {
    const edit = useSelector(state => state.userInfo.edit);
    return (
        <div className={s.sideBar}>
            {!edit ? <UserInfo /> : <UserInfoEdit />}
        </div>
    )
}

export default SideBar;