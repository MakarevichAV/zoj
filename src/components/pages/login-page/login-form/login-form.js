import React from 'react';

const LoginForm = () => {
    return (
        <form>
            <input type="text" className="login-input" placeholder="Логин"/>
            <input type="password" className="login-input" placeholder="Пароль"/>
            <button
                    type="submit" 
                    className="login-button"
                    // onClick={}
                    >
                        ВОЙТИ
                </button>
        </form>
    )
}

export default LoginForm;