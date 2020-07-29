import {combineReducers} from "redux";
import userInfoReducer from "./userInfoReducer";
import mobileMenuReducer from './mobileMenuReducer';
import waterReducer from './waterReducer';

const reducers = combineReducers({
    userInfo: userInfoReducer,
    mobileMenu: mobileMenuReducer,
    waterInfo: waterReducer
});

export default reducers;
