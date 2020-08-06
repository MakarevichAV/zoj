import setAuthToken from '../setAuthToken';
import axios from 'axios';
import {
    SAVE_FOOD_ITEM,
    DEL_FOOD_ROW,
    FOODDAIRY_ERROR,
    GET_FOODDAIRY,
    SET_GRAPH
} from './types';

export const saveFoodItem = data => async dispatch => {
    const date = new Date();
    const year = date.getFullYear();
    const month = Number(date.getMonth()) + 1;
    const day = date.getDate();
    const nowDate = year + '-' + 
                    (month < 10 ? '0' + month : month) + '-' + 
                    (day < 10 ? '0' + day : day);
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

    dispatch({
        type: SAVE_FOOD_ITEM,
        payload: res.data
    });
}

export const getFoodDairy = () => async dispatch =>{
    try {
        const res = await axios.get("/api/foodDairy");
        dispatch({type: GET_FOODDAIRY, payload: res.data});
        // расчет для графика
        // Сортируем массив из БД
        const sortArr = res.data.sort(function(a, b) {
            let dateA = new Date(a.userDate.substring(0, 10)), 
                dateB=new Date(b.userDate.substring(0, 10));
            return dateA-dateB;
        }).map((item) => {
            return {
                date: item.userDate.substring(0, 10),
                calories: Number(item.calories)
            }
        });
        // группируем по дате, складывая кКалории
        let obj={};
        sortArr.forEach(entry=>{
            if(obj[entry.userDate]){
                obj[entry.userDate].calories+= entry.calories;
            }else{
                obj[entry.userDate] = entry;
            }
        });
        const arrForGraph = Object.values(obj);
        dispatch({type: SET_GRAPH, arrForGraph});
    } catch (err) {
        dispatch({type: FOODDAIRY_ERROR, payload: err.responce.msg});
    }
}

export const delFoodRow = (data) => async dispatch => {
    const del = await axios.delete(`/api/foodDairy/${data.id}`);
    const res = await axios.get("/api/foodDairy");
    dispatch({type: DEL_FOOD_ROW, payload: res.data});
}