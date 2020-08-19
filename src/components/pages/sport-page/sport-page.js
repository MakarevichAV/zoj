import React from 'react';
import s from './sport-page.module.css';
import Title from '../../title/title';

const SportPage = () => {
    return (
        <div className={s.wrapper}>
            <Title label="физическая нагрузка"/>
        </div>
    )
}

export default SportPage;