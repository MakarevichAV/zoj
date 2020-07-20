import React from 'react';
import cn from 'classnames';
import s from './info-item.module.css';

const InfoItem = (props) => {
    
    const styles = cn(
        s.item, 
        {[s.underline]: props.data ? props.data.underline : false},
        {[s.important]: props.data ? props.data.important : false},
        {[s.head]: props.data ? props.data.head : false}
    );

    return (
        <p className={styles}>
            <span>{props.name || props.data.key}</span>
            <span>{props.value || props.data.value} {props.unit || props.data.unit}</span>
        </p>
    )
}

export default InfoItem;