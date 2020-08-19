import React from 'react';
import s from './back-female-figure.module.css';
import '../sectors.css';
import backFemaleFigure from '../../img/back-female-figure.png';
import backTrap from '../../img/female sectors/back-trap.png';
import backLeftShoulder from '../../img/female sectors/back-left-shoulder.png';
import backRightShoulder from '../../img/female sectors/back-right-shoulder.png';
import midBack from '../../img/female sectors/mid-back.png';
import lowerBack from '../../img/female sectors/lower-back.png';
import leftLat from '../../img/female sectors/left-lat.png';
import rightLat from '../../img/female sectors/right-lat.png';
import leftTriceps from '../../img/female sectors/left-triceps.png';
import rightTriceps from '../../img/female sectors/right-triceps.png';
import backLeftForearm from '../../img/female sectors/back-left-forearm.png';
import backRightForearm from '../../img/female sectors/back-right-forearm.png';
import glutes from '../../img/female sectors/glutes.png';
import backLeftHip from '../../img/female sectors/back-left-hip.png';
import backRightHip from '../../img/female sectors/back-right-hip.png';
import backLeftShin from '../../img/female sectors/back-left-shin.png';
import backRightShin from '../../img/female sectors/back-right-shin.png';

const BackFemaleFigure = () => {
    return (
        <div className={s.figure}>
            <img className={s.mainImg} src={backFemaleFigure} />
            <img id="f-back-trap" className={s.sector} src={backTrap} />
            <img id="f-back-left-shoulder" className={s.sector} src={backLeftShoulder} />
            <img id="f-back-right-shoulder" className={s.sector} src={backRightShoulder} />
            <img id="f-mid-back" className={s.sector} src={midBack} />
            <img id="f-lower-back" className={s.sector} src={lowerBack} />
            <img id="f-left-lat" className={s.sector} src={leftLat} />
            <img id="f-right-lat" className={s.sector} src={rightLat} />
            <img id="f-left-triceps" className={s.sector} src={leftTriceps} />
            <img id="f-right-triceps" className={s.sector} src={rightTriceps} />
            <img id="f-back-left-forearm" className={s.sector} src={backLeftForearm} />
            <img id="f-back-right-forearm" className={s.sector} src={backRightForearm} />
            <img id="f-glutes" className={s.sector} src={glutes} />
            <img id="f-back-left-hip" className={s.sector} src={backLeftHip} />
            <img id="f-back-right-hip" className={s.sector} src={backRightHip} />
            <img id="f-back-left-shin" className={s.sector} src={backLeftShin} />
            <img id="f-back-right-shin" className={s.sector} src={backRightShin} />
        </div>
    )
}

export default BackFemaleFigure;