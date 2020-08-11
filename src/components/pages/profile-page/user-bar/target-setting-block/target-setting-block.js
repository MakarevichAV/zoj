import React from 'react';

import s from './target-setting-block.css';

const TargetSettingBlock = () => {
    return (
        <div className={s.targetSettingBlock}>
            <p className={s.clickToDrop}>
                Задать цель
                <span>▲</span> 
                {/* ▼ */}
            </p>
            <div className={s.dropDown}>
                <div className={s.selectTarget}>
                    <div className={s.target-Item}>
                        <label>
                            <input type="radio" name="target" id="lose"/>
                            <div className={s.pseudoRadio}></div>
                            Похудеть
                        </label>
                    </div>
                    <div className={s.targetItem}>
                        <label>
                            <input type="radio" name="target" id="gain"/>
                            <div className={s.pseudoRadio}></div>
                            Набрать вес
                        </label>
                    </div>        
                    <div className={s.targetItem}>
                        <label>
                            <input type="radio" name="target" id="keep"/>
                            <div className={s.pseudoRadio}></div>
                            Оставаться в форме
                        </label>
                    </div>
                </div>

                <div className={s.targetValue}>
                    <label for="weight">Желаемый вес</label>
                    <input type="number" id="weight" placeholder="кг" />
                </div>

                {/* здесь будет компонент кнопка */}
                <button>Создать цель</button>
            </div>
        </div>
    )
}

export default TargetSettingBlock;