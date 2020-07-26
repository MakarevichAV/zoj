import {combineReducers} from "redux";
import userInfoReducer from "./userInfoReducer";
import mobileMenuReducer from './mobileMenuReducer';

const reducers = combineReducers({
    userInfo: userInfoReducer,
    mobileMenu: mobileMenuReducer
});

export default reducers;
