import React from 'react';

import './target-setting-block.css';

const TargetSettingBlock = () => {
    return (
        <div className="target-setting-block">
            <p className="click-to-drop">
                Задать цель
                <span>▲</span> 
                {/* ▼ */}
            </p>
            <div className="drop-down">
                <div className="select-target">
                    <div className="target-item">
                        <label>
                            <input type="radio" name="target" id="lose"/>
                            <div className="pseudo-radio"></div>
                            Похудеть
                        </label>
                    </div>
                    <div className="target-item">
                        <label>
                            <input type="radio" name="target" id="gain"/>
                            <div className="pseudo-radio"></div>
                            Набрать вес
                        </label>
                    </div>        
                    <div className="target-item">
                        <label>
                            <input type="radio" name="target" id="keep"/>
                            <div className="pseudo-radio"></div>
                            Оставаться в форме
                        </label>
                    </div>
                </div>

                <div className="target-value">
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