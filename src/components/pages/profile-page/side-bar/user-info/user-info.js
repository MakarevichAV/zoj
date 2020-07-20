import React from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import {goToEdit} from '../../../../../context/actions/userActions'
import InfoItem from '../../info-item/info-item';
import s from './user-info.module.css';
import Button from '../../../../button';

const UserInfo = () => {
    const dispatch = useDispatch();
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

    const edit = () => {
        dispatch(goToEdit({edit: true}));
    }

    return (
        <div className={s.info}>
            <div className={s.photo}></div>
            <p className={s.name}>{userData.name}</p>
            <div className={s.data}>
                <InfoItem name="Возраст" value={userData.age} unit={yearsTxt} />
                <InfoItem name="Рост" value={userData.height} unit="см" />
                <InfoItem name="Вес" value={userData.weight} unit="кг" />
            </div>
            <Button txt="Редактрировать"
                    classType="type1"
                    onClick={edit}
                    />
        </div>
    )
}

export default UserInfo;