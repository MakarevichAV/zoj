import React from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import {addGlass, delGlass} from '../../../../context/actions/waterActions'
import Glass from './glass/glass';

import s from './water-block.module.css';

const WaterBlock = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.waterInfo);
    const norm = useSelector(state => state.userInfo.dailyRate.w);

    const onChangeDrunk = (e) => {
        if (e.target.name === 'add') {
            const val = e.target.dataset.val;
            const sum = data.sum;
            const num = data.num;
            dispatch(addGlass({sum, val, num}));
        } else if (e.target.name === 'delete') {
            const ind = e.target.id;
            const val = e.target.dataset.val;
            const sum = data.sum;
            const num = data.num;
            dispatch(delGlass({ind, sum, val, num}));
            // console.log(`Удалить элемент с индексом ${e.target.id} `);
        }
        
    }

    const drunkWater = data.num.map((item, ind) => {
        return (
            <Glass  volume={item}
                    effect="delete" 
                    onChangeDrunk={onChangeDrunk}
                    id={ind}/>
        )
    });

    return (
        <div className={s.waterBlock}>
            <div className={s.add}>
                <h2>Потребление воды</h2>
                <div className={s.glasses}>
                    <Glass volume="200" effect="add" onChangeDrunk={onChangeDrunk} />
                    <Glass volume="300" effect="add" onChangeDrunk={onChangeDrunk} />
                    <Glass volume="400" effect="add" onChangeDrunk={onChangeDrunk} />
                    <Glass volume="500" effect="add" onChangeDrunk={onChangeDrunk} />
                </div>
            </div>
            <div className={s.total}>
                <p className={s.totalTxt}>ИТОГО: <span className={s.sum}>{data.sum} л</span> <span className={s.norm}>/ {norm} л</span></p>
                <div className={s.glasses}>
                    {drunkWater}
                </div>
            </div>
        </div>
    )
}

export default WaterBlock;