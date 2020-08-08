import React from 'react';
import s from './list-item.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentFoodItem} from "../../../../../context/actions/foodActions";

const ListItem = ({id, listItemValue, item}) => {
    const dispatch = useDispatch();
    const setCurrent = () => {
        dispatch(setCurrentFoodItem(item));
    }
    return (
        <p className={s.item} id={id} onClick={setCurrent}>{listItemValue} </p>
    )
}

export default ListItem;