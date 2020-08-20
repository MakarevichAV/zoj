import React from 'react';
import s from './front-female-figure.module.css';
import '../sectors.css';
import frontFemaleFigure from '../../img/front-female-figure.png';
import chest from '../../img/female sectors/chest.png';
import rightShoulder from '../../img/female sectors/right-shoulder.png';
import leftShoulder from '../../img/female sectors/left-shoulder.png';
import rightBiceps from '../../img/female sectors/right-biceps.png';
import leftBiceps from '../../img/female sectors/left-biceps.png';
import rightTrap from '../../img/female sectors/right-trap.png';
import leftTrap from '../../img/female sectors/left-trap.png';
import rightForearm from '../../img/female sectors/right-forearm.png';
import leftForearm from '../../img/female sectors/left-forearm.png';
import belly from '../../img/female sectors/belly.png';
import rightHip from '../../img/female sectors/right-hip.png';
import leftHip from '../../img/female sectors/left-hip.png';
import rightShin from '../../img/female sectors/right-shin.png';
import leftShin from '../../img/female sectors/left-shin.png';

const FrontFemaleFigure = () => {
    return (
        <div className={s.figure}>
            <img className={s.mainImg} src={frontFemaleFigure} />
            <img id="f-chest" className={s.sector} src={chest} />
            <img id="f-right-shoulder" className={s.sector} src={rightShoulder} />
            <img id="f-left-shoulder" className={s.sector} src={leftShoulder} />
            <img id="f-right-biceps" className={s.sector} src={rightBiceps} />
            <img id="f-left-biceps" className={s.sector} src={leftBiceps} />
            <img id="f-right-trap" className={s.sector} src={rightTrap} />
            <img id="f-left-trap" className={s.sector} src={leftTrap} />
            <img id="f-right-forearm" className={s.sector} src={rightForearm} />
            <img id="f-left-forearm" className={s.sector} src={leftForearm} />
            <img id="f-belly" className={s.sector} src={belly} />
            <img id="f-right-hip" className={s.sector} src={rightHip} />
            <img id="f-left-hip" className={s.sector} src={leftHip} />
            <img id="f-right-shin" className={s.sector} src={rightShin} />
            <img id="f-left-shin" className={s.sector} src={leftShin} />
        </div>
    )
}

export default FrontFemaleFigure;