import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../store";

import setAuthToken from '../../context/setAuthToken';
import PrivateRoute from '../routing/PrivatRoute';
import ProfilePage from '../pages/profile-page/profile-page';
import LoginPage from '../pages/login-page/login-page'
import Home from '../pages/home-page/home-page';
import './app.css';

const App  =  () => {

    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
      
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Switch>
                        <PrivateRoute  path="/" component={Home}/>
                        <Route  path="/login" exact component={LoginPage} />
                    </Switch>
                </Fragment>
            </Router>
        </Provider>
    )
    
}

export default App;