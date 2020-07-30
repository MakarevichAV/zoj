import React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login, clearErrors} from '../../../../context/actions/userActions';

import s from './login-form.module.css';

const LoginForm = (props) => {
    const dispatch = useDispatch();
    const alert = useSelector(state => state.userInfo.error);
    const [user, setUser] = useState({email: '', password: ''});
    const {email, password} = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        dispatch(login({email, password}));
    }

    if (alert) {
        setTimeout(() => dispatch(clearErrors()), 6000);
    }

    return (
        <form>
            {alert ? <div className={s.alert}>{alert}</div> : false}
            <input type="text" className={s.input} placeholder="Логин"
                    name='email' value={email} onChange={onChange}/>
            <input type="password" className={s.input} placeholder="Пароль"
                    name='password' value={password} onChange={onChange}/>
            <button
                    type="submit" 
                    className={s.button}
                    onClick={onSubmit}
                    >
                        ВОЙТИ
            </button>            
            test@mail.ru - 123456 (с неправильным форматом даты) <br />
            dunkanm89@gmail.com - 123456 (с правильным форматом даты)
        </form>
    )
}

export default LoginForm;
