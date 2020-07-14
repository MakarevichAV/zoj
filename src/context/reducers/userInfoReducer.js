import {
    ADD_USER,
    GET_USER,
    DELETE_USER,
    SET_LOADING,
    ERROR_USER
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
    height: null
};

const userInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        // case GET_USER:
        //     return {
        //         ...state,
        //         age: 22
        //     }
        //TODO
        // case ADD_USER: 
        // return {
        //     ...state,
        // }
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default userInfoReducer;
