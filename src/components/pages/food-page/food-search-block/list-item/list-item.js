import React from 'react';
import s from './list-item.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentFoodItem} from "../../../../../context/actions/foodActions";

const ListItem = ({id, listItemValue, item, brand}) => {
    const dispatch = useDispatch();
    const setCurrent = () => {
        dispatch(setCurrentFoodItem(item));
    }
    return (
    <p className={s.item} id={id} onClick={setCurrent}>{listItemValue}  {brand ?  <span> - {brand}</span> : false}</p>
    )
}

export default ListItem;