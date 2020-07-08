import React from 'react';

import Header from '../header';
import SideBar from '../side-bar'
import Info from '../info'
import './app.css';

const App = () => {

    const minWeight = 86; // будет расчитываться
    const maxWeight = 96; // будет расчитываться
    const optimalWeight = 92; // будет расчитываться

    const normsInfo = [
        { 
            key: 'Норма веса',
            value: minWeight + ' - ' + maxWeight,
            unit: 'кг',
            underline: true,
            change: false,
            important: true,
            head: false
        },
        { 
            key: 'Оптимальный вес',
            value: optimalWeight,
            unit: 'кг',
            underline: true,
            change: false,
            important: true,
            head: false
        },
    ];

    const adviceInfo = [
        { 
            key: 'Суточная норма',
            value: '',
            underline: false,
            change: false,
            important: false,
            head: true
        },
        { 
            key: 'Калории',
            value: '2430',
            unit: 'кКал/день',
            underline: true,
            change: false,
            important: false,
            head: false
        },
        { 
            key: 'Белки',
            value: '60',
            unit: 'г/день',
            underline: true,
            change: false,
            important: false,
            head: false
        },
        { 
            key: 'Жиры',
            value: '30',
            unit: 'г/день',
            underline: true,
            change: false,
            important: false,
            head: false
        },
        { 
            key: 'Углеводы',
            value: '40',
            unit: 'г/день',
            underline: true,
            change: false,
            important: false,
            head: false
        },
        { 
            key: 'Вода',
            value: '3.4',
            unit: 'л/день',
            underline: true,
            change: false,
            important: false,
            head: false
        }
    ];

    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <Info   title="Рекомендации"
                        normsInfo={normsInfo} 
                        adviceInfo={adviceInfo}/>
            </div>
        </div>
    )
}

export default App;