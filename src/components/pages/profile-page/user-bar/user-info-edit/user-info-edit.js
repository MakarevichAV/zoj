import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {editUserInfo, setPhoto} from '../../../../../context/actions/userActions'; 
import InfoItem from '../../../../info-item/info-item';
import s from './user-info-edit.module.css';

const UserInfoEdit = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userInfo.user);
    const _id = useSelector(state => state.userInfo.user._id)
    const [user, setUser] = useState({  name: userData.name, 
                                        birthdate: userData.birthdate, 
                                        height: userData.height, 
                                        weight: userData.weight, 
                                        gender: userData.gender,
                                    });
    const {name, birthdate, height, weight, gender} = user;
    
    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onChangeRadio = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    
    const onSubmit = e => {
        e.preventDefault();
        dispatch(editUserInfo({name, birthdate, height, weight, gender, _id}));
    }

    const uploadPhoto = e => {
        if (e.target.files.length) {
            const file = e.target.files[0];
            dispatch(setPhoto(file));
        };
    }

    const genderItems = ['female', 'male'].map((item) => {
        return (
            <div className={s.genderItem}>
                <input id={item} type="radio" value={item} name="gender" 
                    checked={gender === item ? true : false} 
                    onChange={onChangeRadio}/>
                <label htmlFor={item}>
                    <div className={s.pseudoRadio}></div>
                    <p>{item === 'female' ? 'Женский' : 'Мужской'}</p>
                </label>
            </div>
        )
    });
    
    return (
        <form className={s.info}>
            <div className={s.photo}>
                <input className={s.choosePhoto} type="file" accept="image/jpeg" id="photo" onChange={uploadPhoto}/>
                <label htmlFor="photo">
                    <div className={s.pseudoChoose}></div>
                </label>
            </div>
            <input name="name" className={s.name} type="text" value={name} onChange={onChange} />
            <div className={s.data}>
                <InfoItem ind="birthdate" type="date" name="Дата рождения" value={birthdate} change onChangeValue={onChange} />
                <InfoItem ind="height" name="Рост" value={height} change onChangeValue={onChange} />
                <InfoItem ind="weight" name="Вес" value={weight} change onChangeValue={onChange} />
                <div className={s.item}>
                    <p>Пол:</p>
                    <div>
                        {genderItems}
                    </div>
                    
                </div>
            </div>
            <button type="submit" className={`${s.btn} ${s.type1}`} onClick={onSubmit}>Сохранить</button> 
        </form>
    )
}

export default UserInfoEdit;