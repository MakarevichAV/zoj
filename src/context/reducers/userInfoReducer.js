import {
    ADD_USER,
    SET_LOADING,
    REGISTER_FAIL,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    USER_LOADED, 
    CLEAR_ERRORS,
    EDIT_USER_INFO,
    GO_TO_EDIT,
    TOGGLE_IS_LOADING
} from '../actions/types';

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: {},
    age: null,
    edit: false,
    error: null,
    normsInfo: {
        minWeight: null,
        maxWeight: null,
        optWeight: null       
    },
    dailyRate: {
        e: null,
        p: null,
        f: null,
        c: null,
        w: null
    },
    isLoading: false
};


const userInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOADED:
            localStorage.setItem('login', true);
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload,
                age: action.age
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
            localStorage.setItem('registered', true);
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
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('login');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            };
        case EDIT_USER_INFO:
            return {
                ...state,
                edit: false,
                user: {
                    ...state.user,
                    name: action.name,
                    birthdate: action.birthdate,
                    height: action.height,
                    weight: action.weight,
                    gender: action.gender
                },
                age: action.age,
                normsInfo: {
                    ...state.normsInfo,
                    minWeight: action.minWeight,
                    maxWeight: action.maxWeight,
                    optWeight: action.optWeight
                },
                dailyRate: {
                    ...state.dailyRate,
                    e: action.e,
                    p: action.p,
                    f: action.f,
                    c: action.c,
                    w: action.w
                }
            }
        case GO_TO_EDIT:
            return {
                ...state,
                edit: true
            }
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export default userInfoReducer;
