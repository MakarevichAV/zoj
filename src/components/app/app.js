import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../store";
import setAuthToken from '../../context/setAuthToken';
import PrivateRoute from '../routing/PrivatRoute';
import LoginPage from '../pages/login-page/login-page'
import Home from '../pages/home-page/home-page';
import './app.css';

const App = () => {

    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
      
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                        <PrivateRoute exact path="/home" exactly component={Home}/>
                        <Route path="/login"  component={LoginPage} />
                        <Redirect to="/home" />
                </Fragment>
            </Router>
        </Provider>
    )
    
}

export default App;