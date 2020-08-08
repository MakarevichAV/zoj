import setAuthToken from '../setAuthToken';
import axios from 'axios';
import {
    SAVE_FOOD_ITEM,
    DEL_FOOD_ROW,
    FOODDAIRY_ERROR,
    GET_FOODDAIRY
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
        dish: data.foodName,
        weight: data.inpNumValue,
        calories: data.energy,
        protein: data.protein,
        fats: data.fat,
        carbohydrates: data.carbohydrate,
        userDate: nowDate
    };

    setAuthToken(localStorage.token);

    const config = {
        headers: {
          "Content-Type": "application/json"
        }
    };

    const res = await axios.post("/api/foodDairy", JSON.stringify(foodItem), config);

    // dispatch({
    //     type: SAVE_FOOD_ITEM,
    //     payload: res.data
    // });
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
        dispatch({type: FOODDAIRY_ERROR, payload: err.responce.msg});
    }
}

export const delFoodRow = (data) => async dispatch => {
    const del = await axios.delete(`/api/foodDairy/${data.id}`);
    // const res = await axios.get("/api/foodDairy");
    // dispatch({type: DEL_FOOD_ROW, payload: res.data});
    dispatch(getFoodDairy());
}