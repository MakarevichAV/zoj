import React from 'react';

import Header from '../header';
import SideBar from '../side-bar'
import Info from '../info'
import './app.css';

const App = () => {

    const personInfo = [
        { 
            key: 'Возраст',
            value: '31 год',
            underline: true,
            change: false,
            important: false,
            head: false
        },
        { 
            key: 'Рост',
            value: '189 см',
            underline: true,
            change: false,
            important: false,
            head: false
        },
        { 
            key: 'Вес',
            value: '105 кг',
            underline: true,
            change: true,
            important: false,
            head: false
        },
        { 
            key: 'Норма',
            value: '95 кг',
            underline: true,
            change: false,
            important: true,
            head: false
        }
    ];

    const targetInfo = [
        { 
            key: 'Цель',
            value: 'Похудеть',
            underline: false,
            change: false,
            important: false,
            head: true
        },
        { 
            key: 'Вес',
            value: '92 кг',
            underline: true,
            change: false,
            important: false,
            head: false
        }
    ];

    const adviceInfo = [
        { 
            key: 'Рекомендации',
            value: '',
            underline: false,
            change: false,
            important: false,
            head: true
        },
        { 
            key: 'Потребление, кКал/день',
            value: '2430',
            underline: true,
            change: false,
            important: false,
            head: false
        },
        { 
            key: 'Белки, г/день',
            value: '60',
            underline: true,
            change: false,
            important: false,
            head: false
        },
        { 
            key: 'Жиры, г/день',
            value: '30',
            underline: true,
            change: false,
            important: false,
            head: false
        },
        { 
            key: 'Углеводы, г/день',
            value: '40',
            underline: true,
            change: false,
            important: false,
            head: false
        },
        { 
            key: 'Снижение веса, кг/неделю',
            value: '0.9',
            underline: true,
            change: false,
            important: false,
            head: false
        },
        { 
            key: 'Потребление воды, л/день',
            value: '3.4',
            underline: true,
            change: false,
            important: false,
            head: false
        }
    ];

    return (
        <div>
            <Header />
            {/* <div className="wrapper">
                <Title label="Питание" />
            </div> */}
            <div className="container">
                <SideBar />
                <Info   name="Макаревич Александр"
                        personInfo={personInfo}
                        targetInfo={targetInfo} 
                        adviceInfo={adviceInfo}/>
            </div>
        </div>
    )
}

export default App;