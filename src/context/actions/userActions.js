import {
    ADD_USER,
    GET_USER,
    DELETE_USER,
    SET_LOADING,
    ERROR_USER
} from './types';

export const setLoading = () => {
    return {type: SET_LOADING}
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
            type: ERROR_USER,
            payload: err
        });
    }
};

export const getUser = () => async dispatch => {
    try {
        dispatch({
            type: GET_USER
        });
    } catch (err) {
        dispatch({
            type: ERROR_USER,
            payload: err
        })
    }
};