import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import preloader from '../../../preloader.svg';
import UserBar from './user-bar/user-bar';
import Info from './info/info';
import s from './profile-page.module.css';

const ProfilePage = () => {
    const isLoading = useSelector(state => state.userInfo.isLoading);
    return (
        <>
            {isLoading ? 
                <div className="preloader">
                    <img src={preloader} />
                </div>
                : null }
            <div className={s.container}>
                <UserBar />
                <Info />
            </div>
        </>
    )
}

export default ProfilePage;