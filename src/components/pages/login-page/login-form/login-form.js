import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../../../context/actions/userActions';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({email: '', password: ''});
    const {email, password} = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        dispatch(login({email, password}));

        //TODO alert if wrong password or email
    }
    return (
        <form>
            test@mail.ru - 123456
            <input type="text" className="login-input" placeholder="Логин"
                    name='email' value={email} onChange={onChange}/>
            <input type="password" className="login-input" placeholder="Пароль"
                    name='password' value={password} onChange={onChange}/>
            <button
                    type="submit" 
                    className="login-button"
                    onClick={onSubmit}
                    >
                        ВОЙТИ
                </button>
        </form>
    )
}

export default LoginForm;