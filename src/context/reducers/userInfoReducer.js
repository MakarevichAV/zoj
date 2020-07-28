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
    user: 
    {
        // name: 'Иван Иванов',
        //age: 31, // сюда попадают значения при регистрации и редактировании
        // birthDay: '1989-02-11',
        // height: 190,
        // weight: 90,
        // gender: {
        //     male: true,
        //     female: false
        // },
        // userPhoto: null
    },
    age: null,
    edit: false,
    error: null,
    normsInfo: {
        minWeight: null, // сюда попадут расчитанные значения
        maxWeight: null,
        optWeight: null       
    },
    dailyRate: {
        e: null, // расчитанные
        p: null,
        f: null,
        c: null,
        w: null
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
                    birthdate: action.birthdate,
                    height: action.height,
                    weight: action.weight,
                    gender: action.gender
                },
                age: action.age,
                edit: false,
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
                edit: action.edit
            }
        default:
            return state;
    }
}

export default userInfoReducer;
