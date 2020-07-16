import React from 'react';

const RegisterForm = () => {
    return (
        <form>
            <input type="text" className="login-input" placeholder="Логин"/>
            <input type="password" className="login-input" placeholder="Пароль"/>
            <div>
                <input type="password" className="login-input" placeholder="Повторите пароль"/>
                <button
                    type="submit" 
                    className="login-button"
                    // onClick={}
                    >
                        ЗАРЕГИСТРИРОВАТЬСЯ
                </button>
            </div>            
        </form>
    )
}

export default RegisterForm;