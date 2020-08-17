import React from 'react';
import s from './back-male-figure.module.css';
import '../sectors.css';
import backMaleFigure from '../../img/back-male-figure.png';
import backTrap from '../../img/male sectors/back-trap.png';
import backLeftShoulder from '../../img/male sectors/back-left-shoulder.png';
import backRightShoulder from '../../img/male sectors/back-right-shoulder.png';
import midBack from '../../img/male sectors/mid-back.png';
import lowerBack from '../../img/male sectors/lower-back.png';
import leftLat from '../../img/male sectors/left-lat.png';
import rightLat from '../../img/male sectors/right-lat.png';
import leftTriceps from '../../img/male sectors/left-triceps.png';
import rightTriceps from '../../img/male sectors/right-triceps.png';
import backLeftForearm from '../../img/male sectors/back-left-forearm.png';
import backRightForearm from '../../img/male sectors/back-right-forearm.png';
import glutes from '../../img/male sectors/glutes.png';
import backLeftHip from '../../img/male sectors/back-left-hip.png';
import backRightHip from '../../img/male sectors/back-right-hip.png';
import backLeftShin from '../../img/male sectors/back-left-shin.png';
import backRightShin from '../../img/male sectors/back-right-shin.png';

const BackMaleFigure = () => {
    return (
        <div className={s.figure}>
            <img className={s.mainImg} src={backMaleFigure} />
            <img id="back-trap" className={s.sector} src={backTrap} />
            <img id="back-left-shoulder" className={s.sector} src={backLeftShoulder} />
            <img id="back-right-shoulder" className={s.sector} src={backRightShoulder} />
            <img id="mid-back" className={s.sector} src={midBack} />
            <img id="lower-back" className={s.sector} src={lowerBack} />
            <img id="left-lat" className={s.sector} src={leftLat} />
            <img id="right-lat" className={s.sector} src={rightLat} />
            <img id="left-triceps" className={s.sector} src={leftTriceps} />
            <img id="right-triceps" className={s.sector} src={rightTriceps} />
            <img id="back-left-forearm" className={s.sector} src={backLeftForearm} />
            <img id="back-right-forearm" className={s.sector} src={backRightForearm} />
            <img id="glutes" className={s.sector} src={glutes} />
            <img id="back-left-hip" className={s.sector} src={backLeftHip} />
            <img id="back-right-hip" className={s.sector} src={backRightHip} />
            <img id="back-left-shin" className={s.sector} src={backLeftShin} />
            <img id="back-right-shin" className={s.sector} src={backRightShin} />
        </div>
    )
}

export default BackMaleFigure;