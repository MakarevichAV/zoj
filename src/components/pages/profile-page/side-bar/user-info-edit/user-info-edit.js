import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {editUserInfo} from '../../../../../context/actions/userActions'; 
import InfoItem from '../../info-item/info-item';
import Button from '../../../../button';
import s from './user-info-edit.module.css';

const UserInfoEdit = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userInfo.user);
    const [user, setUser] = useState({name: userData.name, age: userData.age, height: userData.height, weight: userData.weight, male: userData.gender.male, female: userData.gender.female});
    const {name, age, height, weight, male, female} = user;
    
    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    const onChangeRadio = e => {
        setUser({...user, [e.target.id]: false, [e.target.value]: true})
    }
    
    const onSubmit = e => {
        e.preventDefault();
        dispatch(editUserInfo({name, age, height, weight, male, female}));
    }
    
    return (
        <form className={s.info}>
            <div className={s.photo}>
                <input className={s.choosePhoto} type="file" id="photo"/>
                <label for="photo">
                    <div className={s.pseudoChoose}></div>
                </label>
            </div>
            <input name="name" className={s.name} type="text" value={name} onChange={onChange} />
            <div className={s.data}>
                <InfoItem ind="age" name="Возраст" value={age} change onChangeValue={onChange} />
                <InfoItem ind="height" name="Рост" value={height} change onChangeValue={onChange} />
                <InfoItem ind="weight" name="Вес" value={weight} change onChangeValue={onChange} />
                <div className={s.item}>
                    <p>Пол:</p>
                    <input id="male" type="radio" value="female" name="gender" checked={female} 
                        onChange={onChangeRadio}
                        />
                    <label for="male">Женский</label>
                    <input id="female" type="radio" value="male" name="gender" checked={male} 
                        onChange={onChangeRadio} 
                        />
                    <label for="female">Мужской</label>
                </div>
            </div>
            <Button txt="Сохранить"
                    classType="type1"
                    type="submit"
                    onClick={onSubmit}
                    />
        </form>
    )
}

export default UserInfoEdit;