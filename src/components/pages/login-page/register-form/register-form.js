import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addUser} from '../../../../context/actions/userActions';

const RegisterForm = () => {
    let [login, setLogin] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [passwordConfirm, setPasswordConfirm] = useState('');
    const dispatch = useDispatch();

    const user = {
        email,
        login,
        password
    }

    const onSubmitForm = () => {
        console.log('submit');
        if (password === passwordConfirm) {
            dispatch(addUser(user));
        } else {
            alert('неправильно введены данные');
        }
    }

    return (
        <form>
            {login}
            {password}
            {passwordConfirm}
            <input type="text" className="login-input"
                 placeholder="Логин" value={login} onChange= {(e) => setLogin( e.target.value)}/>
            <input type="email" className="login-input" placeholder="Email"
                value={email} onChange= {(e) => setEmail( e.target.value)}/>
            <input type="password" className="login-input" placeholder="Пароль"
                value={password} onChange= {(e) => setPassword( e.target.value)}/>
            <div>
                <input type="password" className="login-input" placeholder="Повторите пароль"
                    value={passwordConfirm} onChange= {(e) => setPasswordConfirm( e.target.value)}/>
                <button
                    type="submit" 
                    className="login-button"
                    onClick={() => onSubmitForm()}
                    >
                        ЗАРЕГИСТРИРОВАТЬСЯ
                </button>
            </div>            
        </form>
    )
}

export default RegisterForm;