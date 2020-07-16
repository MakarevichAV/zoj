import {
    ADD_USER,
    SET_LOADING,
    REGISTER_FAIL,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    USER_LOADED
} from '../actions/types';

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };


const userInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOADED:
            localStorage.setItem('login', true);
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token); 
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }; 
        case ADD_USER: 
            return {
                ...state,
                ...action.payload,
                loading: false
            };
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            };
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            };
        default:
            return state;
    }
}

export default userInfoReducer;
