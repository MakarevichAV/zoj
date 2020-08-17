import React from 'react';
import s from './front-male-figure.module.css';
import '../sectors.css';
import frontMaleFigure from '../../img/front-male-figure.png';
import chest from '../../img/male sectors/chest.png';
import rightShoulder from '../../img/male sectors/right-shoulder.png';
import leftShoulder from '../../img/male sectors/left-shoulder.png';
import rightBiceps from '../../img/male sectors/right-biceps.png';
import leftBiceps from '../../img/male sectors/left-biceps.png';
import rightTrap from '../../img/male sectors/right-trap.png';
import leftTrap from '../../img/male sectors/left-trap.png';
import rightForearm from '../../img/male sectors/right-forearm.png';
import leftForearm from '../../img/male sectors/left-forearm.png';
import belly from '../../img/male sectors/belly.png';
import rightHip from '../../img/male sectors/right-hip.png';
import leftHip from '../../img/male sectors/left-hip.png';
import rightShin from '../../img/male sectors/right-shin.png';
import leftShin from '../../img/male sectors/left-shin.png';

const FrontMaleFigure = () => {
    return (
        <div className={s.figure}>
            <img className={s.mainImg} src={frontMaleFigure} />
            <img id="chest" className={s.sector} src={chest} />
            <img id="right-shoulder" className={s.sector} src={rightShoulder} />
            <img id="left-shoulder" className={s.sector} src={leftShoulder} />
            <img id="right-biceps" className={s.sector} src={rightBiceps} />
            <img id="left-biceps" className={s.sector} src={leftBiceps} />
            <img id="right-trap" className={s.sector} src={rightTrap} />
            <img id="left-trap" className={s.sector} src={leftTrap} />
            <img id="right-forearm" className={s.sector} src={rightForearm} />
            <img id="left-forearm" className={s.sector} src={leftForearm} />
            <img id="belly" className={s.sector} src={belly} />
            <img id="right-hip" className={s.sector} src={rightHip} />
            <img id="left-hip" className={s.sector} src={leftHip} />
            <img id="right-shin" className={s.sector} src={rightShin} />
            <img id="left-shin" className={s.sector} src={leftShin} />
        </div>
    )
}

export default FrontMaleFigure;