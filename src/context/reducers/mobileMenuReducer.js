import {
    SHOW_MENU,
    HIDE_MENU
} from '../actions/types';

const initialState = {
    visible: false
}

const mobileMenuReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_MENU:
            return {
                ...state,
                visible: true
            }
        case HIDE_MENU:
            return {
                ...state,
                visible: false
            }
        default:
            return state;
    }
}

export default mobileMenuReducer;