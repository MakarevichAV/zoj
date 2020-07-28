import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import {goToEdit, editUserInfo} from '../../../../../context/actions/userActions'
import InfoItem from '../../../info-item/info-item';
import s from './user-info.module.css';
import Button from '../../../../button/button';

const UserInfo = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userInfo);
    const age = userData.age;
    console.log(userData);
    const {name, weight, height} = userData.user;
    // склонение ГОД/ГОДА/ЛЕТ
    let yearsTxt;
    if (age <= 20) {
        yearsTxt = 'лет';
    } else if (age > 20) {
        if (age % 10 == 1) {
            yearsTxt = 'год';
        } else if (age % 10 > 1 && age % 10 < 5) {
            yearsTxt = 'года';
        } else {
            yearsTxt = 'лет';
        }
    }

    const edit = () => {
        dispatch(goToEdit({edit: true}));
    }

    useEffect(() => {
        if (userData.age == null) {
            return () => {
                dispatch(editUserInfo(userData.user));
            }
        }    
    },
    
    );
    

    return (
        <div className={s.info}>
            <div className={s.photo}></div>
            <p className={s.name}>{name}</p>
            <div className={s.data}>
                <InfoItem name="Возраст" value={age} unit={yearsTxt} />
                <InfoItem name="Рост" value={height} unit="см" />
                <InfoItem name="Вес" value={weight} unit="кг" />
            </div>
            <Button txt="Редактрировать"
                    classType="type1"
                    onClick={edit}
                    />
        </div>
    )
}

export default UserInfo;