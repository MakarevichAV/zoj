import setAuthToken from '../setAuthToken';
import axios from 'axios';
import {
    SAVE_FOOD_ITEM,
    DEL_FOOD_ROW
    
} from './types';

export const saveFoodItem = data => async dispatch => {

    const foodItem = {
        dish: data.foodName,
        weight: data.inpNumValue,
        calories: data.energy,
        protein: data.protein,
        fats: data.fat,
        carbohydrates: data.carbohydrate
    };

    setAuthToken(localStorage.token);

    const config = {
        headers: {
          "Content-Type": "application/json"
        }
    };

    const res = await axios.post("/api/foodDairy", JSON.stringify(foodItem), config)

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