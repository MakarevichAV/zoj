import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {editUserInfo, setPhoto} from '../../../../../context/actions/userActions'; 
import InfoItem from '../../info-item/info-item';
import Button from '../../../../button/button';
import s from './user-info-edit.module.css';

const UserInfoEdit = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userInfo.user);
    const [user, setUser] = useState({  name: userData.name, 
                                        // age: userData.age, 
                                        birthDay: userData.birthDay, 
                                        height: userData.height, 
                                        weight: userData.weight, 
                                        gender: userData.gender
                                        // male: userData.gender.male, 
                                        // female: userData.gender.female
                                    });
    const {name, birthDay, height, weight, gender} = user;
    
    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onChangeRadio = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    
    const onSubmit = e => {
        e.preventDefault();
        dispatch(editUserInfo({name, birthDay, height, weight, gender}));
    }

    const uploadPhoto = e => {  // для загрузки фото
        if (e.target.files.length) {
            const file = e.target.files[0];
            // let formData = new FormData();
            // formData.append('file', file);
            dispatch(setPhoto(file));
        };
    }
    
    return (
        <form className={s.info}>
            <div className={s.photo}>
                <input className={s.choosePhoto} type="file" accept="image/jpeg" id="photo" onChange={uploadPhoto}/>
                <label for="photo">
                    <div className={s.pseudoChoose}></div>
                </label>
            </div>
            <input name="name" className={s.name} type="text" value={name} onChange={onChange} />
            <div className={s.data}>
                <InfoItem ind="birthDay" type="date" name="Дата рождения" value={birthDay} change onChangeValue={onChange} />
                <InfoItem ind="height" name="Рост" value={height} change onChangeValue={onChange} />
                <InfoItem ind="weight" name="Вес" value={weight} change onChangeValue={onChange} />
                <div className={s.item}>
                    <p>Пол:</p>
                    <div>
                        <div className={s.genderItem}>
                            <input id="female" type="radio" value="female" name="gender" 
                                checked={gender=='female' ? true : false} 
                                onChange={onChangeRadio}
                                />
                            <div className={s.pseudoRadio}></div>
                            <label for="female"><p>Женский</p></label>
                        </div>
                        <div className={s.genderItem}>
                            <input id="male" type="radio" value="male" name="gender" 
                                checked={gender=='male' ? true : false} 
                                onChange={onChangeRadio} 
                                />
                            <div className={s.pseudoRadio}></div>
                            <label for="male"><p>Мужской</p></label>
                        </div>
                    </div>
                    
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