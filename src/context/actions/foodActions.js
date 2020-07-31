import {
    SAVE_FOOD_ITEM,
    DEL_FOOD_ROW
    
} from './types';

export const saveFoodItem = (data) => {
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
        // name: data.name,
        // num: data.num,
        // e: data.e,
        // p: data.p,
        // f: data.f,
        // c: data.c
    }
}