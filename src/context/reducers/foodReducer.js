import {
    SAVE_FOOD_ITEM,
    DEL_FOOD_ROW,
    FOODDAIRY_ERROR,
    GET_FOODDAIRY,
    SET_GRAPH
    
} from '../actions/types';

const initialState = {
    food: [],
    arrForGraph: []
}

const foodReducer = (state = initialState, action) => {
    switch(action.type) {
        case  GET_FOODDAIRY:
            return {
                ...state,
                food: [...action.payload.data],
                arrForGraph: [...action.payload.arrForGraph]
            }
        case SAVE_FOOD_ITEM:
            return {
                ...state,
                food: [action.payload,  ...state.food]
            }
        case DEL_FOOD_ROW:
            return {
                ...state,
                food: [...action.payload]
            }
        default:
            return state;
    }
}

export default foodReducer;