import {
    ADD_USER,
    SET_LOADING,
    REGISTER_FAIL,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
} from '../actions/types';

const initialState = {
    _id: null,
    _avatarURL: null,
    _loading: false,
    _error: null,
    firstName: null,
    lastName: null,
    age: null,
    weight: null,
    height: null,
    isAuthenticated: false
};

const userInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
        localStorage.setItem("token", action.payload.token); 
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
        }
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem("token");
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
