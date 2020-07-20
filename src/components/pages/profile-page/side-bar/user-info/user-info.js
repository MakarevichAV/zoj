import React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'; 
import InfoItem from '../../info/info-block/info-item';
import s from './user-info.module.css';
import Button from '../../../../button';

const UserInfo = ({name, userInfoItems}) => {
    const userData = useSelector(state => state.userInfo.user);
    
    // склонение ГОД/ГОДА/ЛЕТ
    let yearsTxt;
    if (userData.age <= 20) {
        yearsTxt = 'лет';
    } else if (userData.age > 20) {
        if (userData.age % 10 == 1) {
            yearsTxt = 'год';
        } else if (userData.age % 10 > 1 && userData.age % 10 < 5) {
            yearsTxt = 'года';
        } else {
            yearsTxt = 'лет';
        }
    }

    return (
        <div className={s.info}>
            <div className={s.photo}></div>
            <p className={s.name}>{name}</p>
            <div className={s.data}>
                <InfoItem name="Возраст" value={userData.age} unit={yearsTxt} />
                <InfoItem name="Рост" value={userData.height} unit="см" />
                <InfoItem name="Вес" value={userData.weight} unit="кг" />
            </div>
            <Button txt="Редактрировать"
                    type="type1"/>
        </div>
    )
}

export default UserInfo;