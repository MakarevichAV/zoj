import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; 
import {Provider} from "react-redux";
import store from "../../store";
import {runWhenConditionTrue} from '../../context/actions/userActions';

import Header from '../header';

import ProfilePage from '../pages/profile-page';
import FoodPage from '../pages/food-page';
import SportPage from '../pages/sport-page';
import LoginPage from '../pages/login-page'
import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {

    state = {
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: localStorage.getItem('login')
        });
    }

    onRegister = () => {
        console.log('Регистрация');
    }


    render () {

        //TODO - плохое и временное решение
        runWhenConditionTrue(
            () => localStorage.getItem('login'),
            () => {
                this.setState({isLoggedIn: true});
            }
        );

        // Временное хранилище --НАЧАЛО--
                // const minWeight = 86; // будет расчитываться
                // const maxWeight = 96; // будет расчитываться
                // const optimalWeight = 92; // будет расчитываться

                // const normsInfo = [
                //     { 
                //         key: 'Норма веса',
                //         value: minWeight + ' - ' + maxWeight,
                //         unit: 'кг',
                //         underline: true,
                //         change: false,
                //         important: true,
                //         head: false
                //     },
                //     { 
                //         key: 'Оптимальный вес',
                //         value: optimalWeight,
                //         unit: 'кг',
                //         underline: true,
                //         change: false,
                //         important: true,
                //         head: false
                //     },
                // ];

                // const adviceInfo = [
                //     { 
                //         key: 'Суточная норма',
                //         value: '',
                //         underline: false,
                //         change: false,
                //         important: false,
                //         head: true
                //     },
                //     { 
                //         key: 'Калории',
                //         value: '2430',
                //         unit: 'кКал/день',
                //         underline: true,
                //         change: false,
                //         important: false,
                //         head: false
                //     },
                //     { 
                //         key: 'Белки',
                //         value: '60',
                //         unit: 'г/день',
                //         underline: true,
                //         change: false,
                //         important: false,
                //         head: false
                //     },
                //     { 
                //         key: 'Жиры',
                //         value: '30',
                //         unit: 'г/день',
                //         underline: true,
                //         change: false,
                //         important: false,
                //         head: false
                //     },
                //     { 
                //         key: 'Углеводы',
                //         value: '40',
                //         unit: 'г/день',
                //         underline: true,
                //         change: false,
                //         important: false,
                //         head: false
                //     },
                //     { 
                //         key: 'Вода',
                //         value: '3.4',
                //         unit: 'л/день',
                //         underline: true,
                //         change: false,
                //         important: false,
                //         head: false
                //     }
                // ];

                // const userInfo = [
                //     { 
                //         key: 'Возраст',
                //         value: '31',
                //         unit: 'год',
                //         underline: false,
                //         change: false,
                //         important: false,
                //         head: false
                //     },
                //     { 
                //         key: 'Рост',
                //         value: '189',
                //         unit: 'см',
                //         underline: false,
                //         change: false,
                //         important: false,
                //         head: false
                //     },
                //     { 
                //         key: 'Вес',
                //         value: '105',
                //         unit: 'кг',
                //         underline: false,
                //         change: false,
                //         important: false,
                //         head: false
                //     }
                // ];
        // Временное хранилище --КОНЕЦ--

        const { isLoggedIn } = this.state;

        if (isLoggedIn) {  // Если пользователь залогинен
            return (
                <Router>
                    <Provider store={store}>
                        <div>
                            <Header />
            
                            <Route  path="/" 
                                    render= {() =>  <ProfilePage />}
                                    exact/>
                                    
                            <Route  path="/profile" 
                                    render= {() =>  <ProfilePage />}/>
                            <Route path="/food" component={FoodPage} />
                            <Route path="/sport" component={SportPage} />
                            <Redirect to="/profile" />
                        </div>
                    </Provider>
                </Router>
            )
        }
    
        return (  // Если пользователь не залогинен
            <Router>
                <Provider store={store}>
                    <Route  path="/login" 
                            render={()=>(
                                <LoginPage 
                                    isLoggedIn={isLoggedIn}
                                    onLogin={this.onLogin}/>
                            )}/>
                    {/* Перебрасываем на страницу Входа */}
                    <Redirect to="/login" />
                </Provider>
            </Router>
        )

    }
    
}

// export default App;