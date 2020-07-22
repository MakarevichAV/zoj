import setAuthToken from '../setAuthToken';
import axios from 'axios';
import {
    ADD_USER,
    LOGIN_SUCCESS,
    USER_LOADED,
    SET_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL, 
    CLEAR_ERRORS,
    EDIT_USER_INFO,
    GO_TO_EDIT
} from './types';

export const setLoading = () => {
    return {type: SET_LOADING}
};

//Login user
export const login = formData => async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/auth", formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      runWhenConditionTrue(
        () => localStorage.token,
        async () => {
          setAuthToken(localStorage.token);

          try {
            const res = await axios.get("/api/auth");
            dispatch({ type: USER_LOADED, payload: res.data });
          } catch (err) {
            dispatch({ type: AUTH_ERROR });
          }
        }
      );
      
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };


export const addUser = user => async dispatch => {
    try {
        //TODO loading
        // setLoading();
        const res = await fetch ("/api/users/", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(user)
        });

        const data = await res.json();

        dispatch({
            type: ADD_USER,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
            payload: err
        });
    }
};

export const clearErrors = () => { return {type: CLEAR_ERRORS}};

export const editUserInfo = (data) =>  {
  // функция расчета веса
  let minWeight, maxWeight, optWeight,
      height = data.height / 100;
  const calcWeight = (minVal, maxVal, optVal) => {
    minWeight = Math.round(minVal * height * height);
    maxWeight = Math.round(maxVal * height * height);
    optWeight = Math.round(optVal * height * height);
  }
  // расчет нормы веса
  if (data.female) {
    if (18 <= data.age <= 24) {
      calcWeight(18.5, 23, 19.6);
    } else if (25 <= data.age <= 34) {
      calcWeight(19, 23.5, 21.3);
    } else if (35 <= data.age <= 44) {
      calcWeight(20, 24.5, 22);
    } else if (45 <= data.age <= 54) {
      calcWeight(21, 25.5, 23.3);
    } else if (55 <= data.age) {
      calcWeight(21.5, 26, 23.8);
    } else {
      console.log('Приложение только для совершеннолетних');
    }
  } else {
    if (18 <= data.age <= 24) {
      calcWeight(19, 24, 21.5);
    } else if (25 <= data.age <= 34) {
      calcWeight(20, 26, 23);
    } else if (35 <= data.age <= 44) {
      calcWeight(21, 26.5, 23.5);
    } else if (45 <= data.age <= 54) {
      calcWeight(22, 27, 25);
    } else if (55 <= data.age) {
      calcWeight(23, 28, 26);
    } else {
      console.log('Приложение только для совершеннолетних');
    }
  }
  // расчет суточной нормы КБЖУ и воды 
  const dailyEnergy = Math.round(
                      1.2 * (data.weight * 10 + 
                      data.height * 6.25 + 
                      data.age * 5 +
                      (data.female ? + 5 : -161)));
  const dailyProtein = Math.round(dailyEnergy * 0.3 / 4);
  const dailyFat = Math.round(dailyEnergy * 0.3 / 9);
  const dailyCarbo = Math.round(dailyEnergy * 0.4 / 4);
  const dailyWater = Math.round(data.weight * 0.03);
  
  return {
    type: EDIT_USER_INFO,
    name: data.name,
    age: data.age,
    height: data.height,
    weight: data.weight,
    male: data.male,
    female: data.female,
    minWeight: minWeight,
    maxWeight: maxWeight,
    optWeight: optWeight,
    e: dailyEnergy,
    p: dailyProtein,
    f: dailyFat,
    c: dailyCarbo,
    w: dailyWater
  }
}
export const goToEdit = (edit) => {
  return {
    type: GO_TO_EDIT,
    edit
  }
}

export function runWhenConditionTrue(condition, callback) {
  const interval = setInterval(()=>{
      if (condition()) {
          clearInterval(interval);
          return callback();
      }
  }, 50);
}