import setAuthToken from '../setAuthToken';
import axios from 'axios';
import {
    ADD_USER,
    LOGIN_SUCCESS,
    USER_LOADED,
    SET_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL
} from './types';

export const setLoading = () => {
    return {type: SET_LOADING}
};

//Load user
export const loadUser = async () =>async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get("/api/auth");

        dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
        dispatch({ type: AUTH_ERROR });
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

      loadUser();
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

