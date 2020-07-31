import {
    SAVE_FOOD_ITEM,
    DEL_FOOD_ROW,

} from '../actions/types';
import { bindActionCreators } from 'redux';

const initialState = {
    food: [
        // {
        //     name: 'Тестовая строка',
        //     num: 250,
        //     e: 100,
        //     p: 15,
        //     f: 10,
        //     c: 15
        // },
        // {
        //     name: 'Тестовая строка 2',
        //     num: 250,
        //     e: 200,
        //     p: 25,
        //     f: 10,
        //     c: 25
        // }
    ]
}

const foodReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_FOOD_ITEM:
            return {
                ...state,
                food: action.food
            }
        case DEL_FOOD_ROW:
            return {
                ...state,
                food: action.food
            }
        default:
            return state;
    }
}

export default foodReducer;