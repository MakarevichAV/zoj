import {combineReducers} from "redux";
import userInfoReducer from "./userInfoReducer";
import mobileMenuReducer from './mobileMenuReducer';
import waterReducer from './waterReducer';
import foodReducer from "./foodReducer";

const reducers = combineReducers({
    userInfo: userInfoReducer,
    mobileMenu: mobileMenuReducer,
    waterInfo: waterReducer,
    foodInfo: foodReducer
});

export default reducers;
