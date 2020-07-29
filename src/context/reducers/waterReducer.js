import {
    ADD_GLASS,
    DEL_GLASS
} from '../actions/types';

const initialState = {
    sum: 0,
    num: [
        2,3
    ]
}

const waterReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_GLASS:
            return {
                ...state,
                sum: action.newSum,
                num: action.newNum
            }
        case DEL_GLASS:
            return {
                ...state,
                sum: action.sum,
                num: action.num
            }
        default:
            return state;
    }
}

export default waterReducer;