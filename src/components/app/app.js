import React from 'react';

import Header from '../header';

import ProfilePage from '../profile-page';
import FoodPage from '../food-page';
import SportPage from '../sport-page';
import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

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

    const userInfo = [
        { 
            key: 'Возраст',
            value: '31',
            unit: 'год',
            underline: false,
            change: false,
            important: false,
            head: false
        },
        { 
            key: 'Рост',
            value: '189',
            unit: 'см',
            underline: false,
            change: false,
            important: false,
            head: false
        },
        { 
            key: 'Вес',
            value: '105',
            unit: 'кг',
            underline: false,
            change: false,
            important: false,
            head: false
        }
    ];

    return (
        <Router>
            <div>
                <Header />
                <Route  path="/profile" 
                        render= {() =>  <ProfilePage 
                                            userInfo={userInfo} 
                                            normsInfo={normsInfo} 
                                            adviceInfo={adviceInfo}
                                        />
                                }
                />
                <Route path="/food" component={FoodPage} />
                <Route path="/sport" component={SportPage} />
            </div>
        </Router>
    )
}

export default App;