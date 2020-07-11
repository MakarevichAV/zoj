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
        setLoading();

        const res = await fetch ("./users", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "ContentType": "application/json"
            }
        });

        const data = res.json();

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