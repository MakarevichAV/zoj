import setAuthToken from '../setAuthToken';
import axios from 'axios';
import {
    SAVE_FOOD_ITEM,
    DEL_FOOD_ROW,
    FOODDAIRY_ERROR,
    GET_FOODDAIRY,
    SET_SEARCH_SUGGESTIONS,
    SET_CURRENT_FOOD_ITEM,
    CLEAR_CURRENT_FOOD_ITEM,
    SET_GRAPH
} from './types';

export const saveFoodItem = data => async dispatch => {
    const date = new Date();
    const year = date.getFullYear();
    const month = Number(date.getMonth()) + 1;
    const day = date.getDate();
    const nowDate = year + '-' + 
                    (month < 10 ? '0' + month : month) + '-' + 
                    (day < 10 ? '0' + day : day) + 'Т' +
                    (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' +
                    (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':' +
                    (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    const foodItem = {
        dish: data.name,
        weight: data.inpNumValue,
        calories: data.energy,
        protein: data.protein,
        fats: data.fat,
        carbohydrates: data.carbs,
        userDate: nowDate
    };

    setAuthToken(localStorage.token);

    const config = {
        headers: {
          "Content-Type": "application/json"
        }
    };

    const res = await axios.post("/api/foodDairy", JSON.stringify(foodItem), config);

    dispatch(getFoodDairy());
}

export const getFoodDairy = () => async dispatch =>{
    try {
        let result = {};
        let res = await axios.get("/api/foodDairy");
        // Сортируем массив из БД
        res.data.sort(function(a, b) {
            let dateA = a.userDate, 
                dateB = b.userDate;
            // return dateB - dateA;
            if (dateA > dateB) { 
            return 1; } 
            if (dateA < dateB) { 
            return -1; } 
            return 0; 
        });
        const easyArr = res.data.map((item) => {
            return {
                date: item.userDate.substring(0, 10),
                calories: Number(item.calories)
            }
        });
        // группируем по дате, складывая кКалории
        let obj={};
        easyArr.forEach(entry=>{
            if(obj[entry.date]){
                obj[entry.date].calories+= entry.calories;
            }else{
                obj[entry.date] = entry;
            }
        });
        result.data = res.data;
        result.arrForGraph = Object.values(obj);

        dispatch({type: GET_FOODDAIRY, payload: result});
        
    } catch (err) {
        dispatch({type: FOODDAIRY_ERROR, payload: err});
    }
}

export const delFoodRow = (data) => async dispatch => {
    const del = await axios.delete(`/api/foodDairy/${data.id}`);
    const res = await axios.get("/api/foodDairy");
    dispatch({type: DEL_FOOD_ROW, payload: res.data});
    dispatch(getFoodDairy());
}

export const findFoodSuggestions = data => async dispatch => {
    const suggestions = [];
    //todo test cors problem
    const res = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?ingr=${data}&app_id=7795af92&app_key=1b2e03b9161e10e10516d5aa0e77a675`,
    // const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/food-database/v2/parser?ingr=${data}&app_id=7795af92&app_key=1b2e03b9161e10e10516d5aa0e77a675`,
        {headers: {
        'Access-Control-Allow-Origin': '*',}});
    const hints = await res.data.hints;

    for (let i = 0; i < hints.length; i++) {
        if (suggestions.length === 4) {
            break;
        }
        suggestions.push(hints[i]);
    }
    console.log(suggestions);
    dispatch({type: SET_SEARCH_SUGGESTIONS, payload: suggestions})
}

export const setCurrentFoodItem = data => {
    const currentItem =  {
        name: data.label,
        energy: Math.round(data.nutrients.ENERC_KCAL),
        protein: Math.round(data.nutrients.PROCNT),
        fat: Math.round(data.nutrients.FAT),
        carbs: Math.round(data.nutrients.CHOCDF),
        energyDefault: Math.round(data.nutrients.ENERC_KCAL),
        proteinDefault: Math.round(data.nutrients.PROCNT),
        fatDefault: Math.round(data.nutrients.FAT),
        carbsDefault: Math.round(data.nutrients.CHOCDF)
    }

    return {
        type:SET_CURRENT_FOOD_ITEM,
        payload: currentItem
    }
}

export const calculateEPFC = ({weight, foodItem}) => {
    foodItem.energy = Math.round(foodItem.energyDefault * weight / 100);
    foodItem.protein = Math.round(foodItem.proteinDefault * weight / 100);
    foodItem.fat = Math.round(foodItem.fatDefault * weight / 100);
    foodItem.carbs = Math.round(foodItem.carbsDefault * weight / 100);

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