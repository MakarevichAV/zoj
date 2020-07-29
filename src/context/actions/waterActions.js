import {
    ADD_GLASS,
    DEL_GLASS
} from './types';

export const addGlass = ({sum, val, num}) => {
    const newSum = sum + (val / 1000);
    const newNum = num.push(val);
    return {
        type: ADD_GLASS,
        newSum,
        newNum
    }
}
// export const delGlass = () => {

// }