import React from 'react';
import s from './footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.wrapper}>
                <p className={s.text}>
                    Дипломный проект разработан в рамках стажировки <span className={s.txt1}>Bee</span><span className={s.txt2}>Interns</span> 2020 г.
                </p>
                <br/>
                <p className={`${s.text} ${s.italic}`}>
                    Разработали: <br/>
                    Макаревич Александр, 8 (977) 462-58-77 <br/>
                    Смодлев Андрей, 8 (999) 999-99-99
                </p>
            </div>
        </div>
    )
}

export default Footer;