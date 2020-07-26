import React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, clearErrors} from '../../../../context/actions/userActions';

import s from './register-form.module.css';

const RegisterForm = (props) => {

    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: "",
        email: "",
        height: "",
        weight:"",
        gender:'',
        birthdate:"",
        password: "",
        password2: ""
    });
    
    const alertArray = useSelector(state => state.userInfo.error);
    const alert = Array.isArray(alertArray) ? alertArray[0].msg : false;
    const { name, email, height, weight, gender, birthdate, password, password2} = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
       if (password === password2) {
        dispatch(addUser({name, email, password, height, weight, birthdate, gender}));
       }
    };

    if (alert) {
        setTimeout(() => dispatch(clearErrors()), 6000);
    }

    return (
        <form >
             {alert ? <div className={s.alert}>{alert}</div> : false}
            <input type="text" className={s.input}
                        name="name"
                        placeholder="Логин" 
                        value={name} 
                        onChange= {onChange}/>
            <input type="email" className={s.input}
                        name="email" 
                        placeholder="Email"
                        value={email} 
                        onChange= {onChange}/>
            <div className={s.inputGroupe}>
                <div className={s.radioGroupe}>
                    <input type="radio" className={s.input}
                                id='male'
                                name="gender"
                                value='male' 
                                onChange={onChange}
                                required/>
                    <label htmlFor='male'>Мужчина</label>
                    <input type="radio" className={s.input}
                                id='female'
                                name="gender"
                                value='female'
                                onChange={onChange}
                                required/>
                    <label htmlFor='female'>Женщина</label>
                </div>
                <input type="date" className={s.input}
                            name="birthdate"
                            value={birthdate} 
                            onChange= {onChange} 
                            required/>
            </div>
            <div className={s.inputGroupe}>
                <input type="number" className={s.input}
                            name="height"
                            placeholder="Рост"
                            value={height} 
                            onChange= {onChange}
                            max={270}    
                            required/>
                <input type="number" className={s.input}
                            name="weight"
                            placeholder="Вес"
                            value={weight} 
                            onChange= {onChange}
                            max={200}   
                            required/>
            </div>
            <input type="password" className={s.input} 
                        name="password"
                        placeholder="Пароль"
                        value={password} 
                        onChange= {onChange}            
                        required minLength="6"/>
            <input type="password" className={s.input}
                        name="password2"
                        placeholder="Повторите пароль"
                        value={password2} 
                        onChange= {onChange}   
                        required minLength="6"/>
            <div>
                <button
                    type="submit" 
                    className={s.button}
                    onClick={onSubmit}
                    >
                        ЗАРЕГИСТРИРОВАТЬСЯ
                </button>
            </div>            
        </form>
    )
}

export default RegisterForm;