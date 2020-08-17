import React from 'react';
import {useSelector} from 'react-redux';
import s from './figures-block.module.css';
import './sectors.css';
import FrontMaleFigure from './front-male-figure/front-male-figure';
import FrontFemaleFigure from './front-female-figure/front-female-figure';
import BackMaleFigure from './back-male-figure/back-male-figure';
import BackFemaleFigure from './back-female-figure/back-female-figure';

const FiguresBlock = () => {

    const gender = useSelector(state => state.userInfo.user.gender);

    return (
        <>
            {gender === 'male' ? 
                <div className={s.figuresBlock}>
                    <FrontMaleFigure />
                    <BackMaleFigure />
                </div> :
                <div className={s.figuresBlock}>
                    <FrontFemaleFigure />
                    <BackFemaleFigure />
                </div>
            }
        </>
    )
}

export default FiguresBlock;