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
    GO_TO_EDIT
} from '../actions/types';

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: {
        name: 'Иван Иванов',
        age: 25, // сюда попадают значения при регистрации и редактировании
        height: 190,
        weight: 90,
        edit: false
    },
    error: null,
    normsInfo: {
        minWeight: 86, // сюда попадут расчитанные значения
        maxWeight: 96,
        optWeight: 92       
    },
    dailyRate: {
        e: 2400, // расчитанные
        p: 65,
        f: 30,
        c: 50,
        w: 3.6
    }
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
                user: {
                    ...state.user,
                    name: action.name,
                    age: action.age,
                    height: action.height,
                    weight: action.weight,
                    edit: false
                }
            }
        case GO_TO_EDIT:
            return {
                ...state,
                user: {
                    ...state.user,
                    edit: action.edit
                }
            }
        default:
            return state;
    }
}

export default userInfoReducer;
