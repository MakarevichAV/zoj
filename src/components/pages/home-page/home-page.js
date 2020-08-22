import React, {Fragment} from 'react'
import {useEffect} from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getUser} from '../../../context/actions/userActions';
import {getFoodDairy} from '../../../context/actions/foodActions';

import s from './home-page.module.css';

import Header from '../../header/header';
import Footer from '../../footer/footer';
import ProfilePage from '../profile-page/profile-page';
import FoodPage from '../food-page/food-page';
import TrainingPage from '../training-page/training-page';
import TrainerPage from '../trainer-page/trainer-page';

export default function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
        dispatch(getFoodDairy());
    }, []);
    
    return (
        <div className={s.wrap}>
            <Router>
                <Fragment>
                    <Header />
                    <Fragment>
                        <Route exact path="/profile" component={ProfilePage}/>
                        <Route path="/food" component={FoodPage} />
                        <Route path="/training" component={TrainingPage} />
                        <Route path="/trainer" component={TrainerPage} />
                        <Redirect to="profile" />   
                    </Fragment>
                    <Footer />
                </Fragment>
            </Router>
        </div>
    )
}
