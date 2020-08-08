import setAuthToken from '../setAuthToken';
import axios from 'axios';
import {
    SAVE_FOOD_ITEM,
    DEL_FOOD_ROW,
    FOODDAIRY_ERROR,
    GET_FOODDAIRY,
    SET_SEARCH_SUGGESTIONS,
    SET_CURRENT_FOOD_ITEM,
    CLEAR_CURRENT_FOOD_ITEM
} from './types';

export const saveFoodItem = data => async dispatch => {
    const foodItem = {
        dish: data.name,
        weight: data.inpNumValue,
        calories: data.energy,
        protein: data.protein,
        fats: data.fat,
        carbohydrates: data.carbs
    };
    console.log(foodItem);
    setAuthToken(localStorage.token);

    const config = {
        headers: {
          "Content-Type": "application/json"
        }
    };

    const res = await axios.post("/api/foodDairy", JSON.stringify(foodItem), config);
    console.log(res.data)
    dispatch({
        type: SAVE_FOOD_ITEM,
        payload: res.data
    });
}

export const getFoodDairy = () => async dispatch =>{
    try {
        const res = await axios.get("/api/foodDairy");
        dispatch({type: GET_FOODDAIRY, payload: res.data});
    } catch (err) {
        dispatch({type: FOODDAIRY_ERROR, payload: err.responce.msg})
    }
}

export const delFoodRow = (data) => async dispatch => {
    const del = await axios.delete(`/api/foodDairy/${data.id}`);
    const res = await axios.get("/api/foodDairy");
    dispatch({type: DEL_FOOD_ROW, payload: res.data});
}

export const findFoodSuggestions = data => async  dispatch => {
    const suggestions = [];
    const res = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?ingr=${data}&app_id=7795af92&app_key=1b2e03b9161e10e10516d5aa0e77a675`,
        {headers: {
        'Access-Control-Allow-Origin': '*',}});
    for (let i = 0; i < 4; i++) {
        suggestions.push(res.data.hints[i]);
    }
    dispatch({type: SET_SEARCH_SUGGESTIONS, payload: suggestions})
}

export const setCurrentFoodItem = data => {
    const currentItem =  {
        name: data.label,
        energy: Math.round(data.nutrients.ENERC_KCAL),
        protein: Math.round(data.nutrients.PROCNT),
        fat: Math.round(data.nutrients.FAT),
        carbs: Math.round(data.nutrients.CHOCDF)
    }

    return {
        type:SET_CURRENT_FOOD_ITEM,
        payload: currentItem
    }
}

export const calculateEPFC = ({weight, foodItem}) => {
    foodItem.energy = Math.round(foodItem.energy * weight / 100);
    foodItem.protein = Math.round(foodItem.protein * weight / 100);
    foodItem.fat = Math.round(foodItem.fat * weight / 100);
    foodItem.carbs = Math.round(foodItem.carbs * weight / 100);

    return {
        type: SET_CURRENT_FOOD_ITEM,
        payload: foodItem
    }
}

export const clearCurrentFoodItem = () => {
    return {
        type: CLEAR_CURRENT_FOOD_ITEM,
    }
}