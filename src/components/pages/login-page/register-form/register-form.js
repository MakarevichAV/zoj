import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addUser} from '../../../../context/actions/userActions';

import s from './register-form.module.css';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
      });
    
    const { name, email, password, password2} = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        
       if (password === password2) {
        dispatch(addUser({name, email, password}));
       }

        //TODO alert if input wrong + loading msg??
      };

    return (
        <form >
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
            <input type="password" className={s.input} 
                        name="password"
                        placeholder="Пароль"
                        value={password} 
                        onChange= {onChange}            
                        required minLength="6"/>
            <div>
                <input type="password" className={s.input}
                            name="password2"
                            placeholder="Повторите пароль"
                            value={password2} 
                            onChange= {onChange}   
                            required minLength="6"/>
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