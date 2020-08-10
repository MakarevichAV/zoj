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
    GO_TO_EDIT,
    TOGGLE_IS_LOADING
} from './types';

export const setLoading = () => {
    return {type: SET_LOADING}
};

export const getUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);

    try {
      dispatch(toggleIsLoading(true));
      const res = await axios.get("/api/auth");
      const user = await res.data;
      let birthDate = new Date(user.birthdate);
      let now = new Date();
      let age = now.getFullYear() - birthDate.getFullYear();
      dispatch({ type: USER_LOADED, payload: res.data, age: age });
      dispatch(toggleIsLoading(false))
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  }
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


      //todo get user?
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

export const editUserInfo = (data) => async dispatch => {
  dispatch(toggleIsLoading(true));
  // функция расчета веса
  let minWeight, maxWeight, optWeight,
      height = data.height / 100;
  const calcWeight = (minVal, maxVal, optVal) => {
    minWeight = Math.round(minVal * height * height);
    maxWeight = Math.round(maxVal * height * height);
    optWeight = Math.round(optVal * height * height);
  }

  // Расчет возраста от даты рождения
  let birthDate = new Date(data.birthdate);
  let now = new Date();
  let age = now.getFullYear() - birthDate.getFullYear();
  
  // расчет нормы веса
  if (data.gender === 'female') {
    if (18 <= age <= 24) {
      calcWeight(18.5, 23, 19.6);
    } else if (25 <= age <= 34) {
      calcWeight(19, 23.5, 21.3);
    } else if (35 <= age <= 44) {
      calcWeight(20, 24.5, 22);
    } else if (45 <= age <= 54) {
      calcWeight(21, 25.5, 23.3);
    } else if (55 <= age) {
      calcWeight(21.5, 26, 23.8);
    } else {
      console.log('Приложение только для совершеннолетних');
    }
  } else {
    if (18 <= age <= 24) {
      calcWeight(19, 24, 21.5);
    } else if (25 <= age <= 34) {
      calcWeight(20, 26, 23);
    } else if (35 <= age <= 44) {
      calcWeight(21, 26.5, 23.5);
    } else if (45 <= age <= 54) {
      calcWeight(22, 27, 25);
    } else if (55 <= age) {
      calcWeight(23, 28, 26);
    } else {
      console.log('Приложение только для совершеннолетних');
    }
  }
  // расчет суточной нормы КБЖУ и воды 
  const dailyEnergy = Math.round(
                      1.2 * (data.weight * 10 + 
                      data.height * 6.25 + 
                      age * 5 +
                      (data.gender=='male' ? + 5 : -161)));
  const dailyProtein = Math.round(dailyEnergy * 0.3 / 4);
  const dailyFat = Math.round(dailyEnergy * 0.3 / 9);
  const dailyCarbo = Math.round(dailyEnergy * 0.4 / 4);
  const dailyWater = Math.round(data.weight * 0.03);

  const config = {
      headers: {
          "Content-Type": "application/json"
      }
  };
  const res = await axios.put(`/api/users/${data._id}`, data, config);
  // dispatch(toggleIsLoading(false));
  const newUserdata = await res.data;
  dispatch({
    type: EDIT_USER_INFO,
    name: newUserdata.name,
    age: age,
    birthdate: newUserdata.birthdate,
    height: newUserdata.height,
    weight: newUserdata.weight,
    gender: newUserdata.gender,
    minWeight: minWeight,
    maxWeight: maxWeight,
    optWeight: optWeight,
    e: dailyEnergy,
    p: dailyProtein,
    f: dailyFat,
    c: dailyCarbo,
    w: dailyWater
  });
  dispatch(toggleIsLoading(false));
}

export const setPhoto = file => async dispatch => {
    const data = new FormData()
    data.append('file', file)
    axios.post("http://localhost:8080/upload", data, { 
        
    })
    .then(res => { // then print response status
      console.log(res.statusText)
    })
  
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

export const toggleIsLoading = (isLoading) => {
  return {
    type: TOGGLE_IS_LOADING,
    isLoading
  }
}