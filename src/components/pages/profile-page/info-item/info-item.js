import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import cn from 'classnames';
import s from './info-item.module.css';

const InfoItem = (props) => {
    
    const styles = cn(
        s.item, 
        {[s.underline]: props.underline},
        {[s.important]: props.important},
        {[s.head]: props.head},
        {[s.blue]: props.blue}
    );

    const type = props.type ? props.type : 'number';
    // const [user, setUser] = useState({index: props.value});
    // const val = user.index;

    // const onChange = e => setUser({...user, index: e.target.value});

    return (
        <p className={styles}>
            <span>{props.name}</span>
            {props.change ? 
                <input name={props.ind} type={type} value={props.value} onChange={props.onChangeValue} /> : 
                <span>{props.value} {props.unit}</span>
            }
        </p>
    )
}

export default InfoItem;