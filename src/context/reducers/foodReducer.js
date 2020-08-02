import {
    SAVE_FOOD_ITEM,
    DEL_FOOD_ROW,
    FOODDAIRY_ERROR,
    GET_FOODDAIRY
    
} from '../actions/types';

const initialState = {
    searchState: {
        list: '',
        inpValue: '',
        inpNumValue: 100,
        showList: false,
        foodName: null,
        energy: null,
        protein: null,
        fat: null,
        carbohydrate: null,
        foodId: null,
        disabled: true
    },
    food: []
}

const foodReducer = (state = initialState, action) => {
    switch(action.type) {
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
                food: action.newFoodArray
            }
        default:
            return state;
    }
}

export default foodReducer;