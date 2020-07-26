import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {hideMenu} from '../../../context/actions/menuActions';
import s from './crose.module.css';

const Crose = () => {
    const dispatch = useDispatch();
    const onHideMenu = () => {
        dispatch(hideMenu())
    }
    return (
        <button className={s.crose} onClick={onHideMenu}></button>
    )
}

export default Crose;