import React from 'react';
import s from './figures-block.module.css';
import './sectors.css';
import FrontMaleFigure from './front-male-figure/front-male-figure';
import BackMaleFigure from './back-male-figure/back-male-figure';
// import frontMaleFigure from '../img/front-male-figure.png';
import backMaleFigure from '../img/back-male-figure.png';
// import chest from '../img/male sectors/chest.png';
// import rightShoulder from '../img/male sectors/right-shoulder.png';
// import leftShoulder from '../img/male sectors/left-shoulder.png';
// import rightBiceps from '../img/male sectors/right-biceps.png';
// import leftBiceps from '../img/male sectors/left-biceps.png';
// import rightTrap from '../img/male sectors/right-trap.png';
// import leftTrap from '../img/male sectors/left-trap.png';
// import rightForearm from '../img/male sectors/right-forearm.png';
// import leftForearm from '../img/male sectors/left-forearm.png';
// import belly from '../img/male sectors/belly.png';
// import rightHip from '../img/male sectors/right-hip.png';
// import leftHip from '../img/male sectors/left-hip.png';
// import rightShin from '../img/male sectors/right-shin.png';
// import leftShin from '../img/male sectors/left-shin.png';

const FiguresBlock = () => {
    return (
        <div className={s.figuresBlock}>
            <FrontMaleFigure />
            <BackMaleFigure />
        </div>
    )
}

export default FiguresBlock;