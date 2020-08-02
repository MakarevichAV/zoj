import React, {Fragment} from 'react'
import {useEffect} from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getUser} from '../../../context/actions/userActions';

import Header from '../../header/header';
import ProfilePage from '../profile-page/profile-page';
import FoodPage from '../food-page/food-page';
import SportPage from '../sport-page/sport-page';

export default function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, []);
    
    return (
        <div>
            <Router>
                <Fragment>
                    <Header />
                    <Fragment>
                        <Route exact path="/profile" component={ProfilePage}/>
                        <Route path="/food" component={FoodPage} />
                        <Route path="/sport" component={SportPage} />
                        <Redirect to="profile" />   
                    </Fragment>
                </Fragment>
            </Router>
        </div>
    )
}
