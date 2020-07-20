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

export const editUserInfo = ({name, age, height, weight}) =>  {
  return {
    type: EDIT_USER_INFO,
    name,
    age,
    height,
    weight
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