import {combineReducers} from "redux";
import userInfoReducer from "./userInfoReducer";
import waterReducer from './waterReducer';
import foodReducer from "./foodReducer";

const reducers = combineReducers({
    userInfo: userInfoReducer,
    waterInfo: waterReducer,
    foodInfo: foodReducer
});

export default reducers;
