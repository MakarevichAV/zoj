import setAuthToken from '../setAuthToken';
import axios from 'axios';
import {
    SAVE_FOOD_ITEM,
    DEL_FOOD_ROW,
    FOODDAIRY_ERROR,
    GET_FOODDAIRY,
    SET_SEARCH_SUGGESTIONS,
    SET_CURRENT_FOOD_ITEM
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

    const res = await axios.post("/api/foodDairy", JSON.stringify(foodItem), config);

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
    console.log(data);

    const calculateEPFC = (e) => {
        // По id из стэйта получаем из фудСервиса значения КБЖУ для расчетов
        const foodItem = foodService.getSelectedFood(foodId);
        // Расчитываем
        const energy = Math.round(foodItem.energy * e.target.value / 100);
        const protein = Math.round(foodItem.protein * e.target.value / 100);
        const fat = Math.round(foodItem.fat * e.target.value / 100);
        const carbohydrate = Math.round(foodItem.carbohydrate * e.target.value / 100);
        // И записываем в Стэйт
        setFood({
            ...food,
            inpNumValue: e.target.value,
            energy: energy,
            protein: protein,
            fat: fat,
            carbohydrate: carbohydrate
        });
    }
    return {
        type:SET_CURRENT_FOOD_ITEM,
        payload: data
    }
}