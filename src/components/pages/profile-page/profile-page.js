import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import preloader from '../../../760.svg';
import SideBar from './side-bar/side-bar';
import Info from './info/info';
import s from './profile-page.module.css';

const ProfilePage = () => {
    const isLoading = useSelector(state => state.userInfo.loading);
    return (
        <>
            {isLoading ? 
                <div className={s.preloader}>
                    <img src={preloader} />
                </div>
                : null }
            <div className={s.container}>
                <SideBar />
                <Info />
            </div>
        </>
    )
}

export default ProfilePage;