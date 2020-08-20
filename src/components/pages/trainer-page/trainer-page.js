import React from 'react';
import s from './trainer-page.module.css';
import Title from '../../title/title';
import FiguresBlock from './figures-block/figures-block';

const TrainerPage = () => {
    return (
        <div>
            <div className={s.wrapper}>
                <Title label="Виртуальный тренер"/>
            </div>
            <div className={s.container}>
                <FiguresBlock />
            </div>
        </div>
    )
}

export default TrainerPage;