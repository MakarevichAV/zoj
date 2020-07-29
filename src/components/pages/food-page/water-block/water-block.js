import React from 'react';

import s from './water-block.module.css';

const WaterBlock = () => {
    return (
        <div className={s.waterBlock}>
            <div className={s.add}>
                <h2>Потребление воды</h2>
                <div className={s.glasses}>
                    <div className={s.glassItem}>
                        <p><span className={s.volume}>200</span>г</p>
                        <div className={s.glass}></div>
                        <button className={s.addBtn}></button>
                    </div>
                    <div className={s.glassItem}>
                        <p><span className={s.volume}>300</span>г</p>
                        <div className={s.glass}></div>
                        <button className={s.addBtn}></button>
                    </div>
                    <div className={s.glassItem}>
                        <p><span className={s.volume}>400</span>г</p>
                        <div className={s.glass}></div>
                        <button className={s.addBtn}></button>
                    </div>
                    <div className={s.glassItem}>
                        <p><span className={s.volume}>500</span>г</p>
                        <div className={s.glass}></div>
                        <button className={s.addBtn}></button>
                    </div>
                </div>
            </div>
            <div className={s.total}>

            </div>
        </div>
    )
}

export default WaterBlock;