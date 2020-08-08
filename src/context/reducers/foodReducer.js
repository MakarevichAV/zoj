import {
    SAVE_FOOD_ITEM,
    DEL_FOOD_ROW,
    FOODDAIRY_ERROR,
    GET_FOODDAIRY,
    SET_SEARCH_SUGGESTIONS
    
} from '../actions/types';

const initialState = {
    food: [],
    searchSuggestions: []
}

const foodReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCH_SUGGESTIONS:
            return {
                ...state,
                searchSuggestions: [action.payload]
            }
        case  GET_FOODDAIRY:
            return {
                ...state,
                food: [...action.payload]
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