import { createStore } from "redux";
import rootReducer from "./context/reducers";

const initialState = {};

const store = createStore (
    rootReducer,
    initialState
);

export default store;