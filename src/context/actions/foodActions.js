import {
    SAVE_FOOD_ITEM,
    DEL_FOOD_ROW
    
} from './types';

export const saveFoodItem = (data) => {
    console.log(data);
    data.foodArr.push({
        name: data.foodName,
        num: data.inpNumValue,
        e: data.energy,
        p: data.protein,
        f: data.fat,
        c: data.carbohydrate
    });
    return {
        type: SAVE_FOOD_ITEM,
        newFoodArray: data.foodArr
    }
}

export const delFoodRow = (data) => {
    
    const ind = +data.ind;
    const newFoodArray = data.foodArr.filter((v, i) => {
        if (i !== ind) {
            return data.foodArr[i];
        } 
    } );
    return {
        type: DEL_FOOD_ROW,
        newFoodArray
    }
}