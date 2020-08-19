import React from 'react';

import s from './glass.module.css';

const Glass = ({volume, effect, onChangeDrunk, id}) => {
    return (
        <div className={s.item}>
            <p><span className={s.volume}>{volume}</span>мл</p>
            <div className={effect !== 'delete' ? s.emptyGlass : s.fullGlass}></div>
            <button id={id} name={effect} data-val={volume} className={`${s.btn} ${effect == 'add' ? s.addBtn : s.delBtn}`}
                    onClick={onChangeDrunk}></button>
        </div>
    )
}

export default Glass;