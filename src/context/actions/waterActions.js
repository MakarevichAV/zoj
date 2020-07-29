import {
    ADD_GLASS,
    DEL_GLASS
} from './types';

export const addGlass = (data) => {
    const newSum = (+data.sum + (data.val / 1000)).toFixed(1);
    data.num.push(data.val);
    return {
        type: ADD_GLASS,
        newSum,
        newNum: data.num
    }
}
export const delGlass = (data) => {
    const newSum = (+data.sum - (data.val / 1000)).toFixed(1);
    const ind = +data.ind;
    const newNum = data.num.filter((v, i) => {
        if (i !== ind) {
            return data.num[i];
        } 
    } );
    return {
        type: DEL_GLASS,
        newSum,
        newNum
    }
}