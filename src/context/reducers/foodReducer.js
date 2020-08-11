import {
    SAVE_FOOD_ITEM,
    DEL_FOOD_ROW,
    FOODDAIRY_ERROR,
    GET_FOODDAIRY,
    SET_SEARCH_SUGGESTIONS,
    SET_CURRENT_FOOD_ITEM,
    CLEAR_CURRENT_FOOD_ITEM,
    SET_GRAPH
} from '../actions/types';

const initialState = {
    food: [],
    searchSuggestions: [],
    currentFoodItem: null,
    arrForGraph: []
}

const foodReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLEAR_CURRENT_FOOD_ITEM:
            return {
                ...state,
                searchSuggestions: null,
                currentFoodItem: null
            }
        case SET_CURRENT_FOOD_ITEM:
            return {
                ...state,
                currentFoodItem: action.payload,
                // food: action.disabled
            }
        case SET_SEARCH_SUGGESTIONS:
            return {
                ...state,
                searchSuggestions: [action.payload]
            }
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