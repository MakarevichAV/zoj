import React from 'react';
import cn from 'classnames';
import s from './info-item.module.css';

const InfoItem = (props) => {
    
    const styles = cn(
        s.item, 
        {[s.underline]: props.underline},
        {[s.important]: props.important},
        {[s.head]: props.head}
    );

    return (
        <p className={styles}>
            <span>{props.name}</span>
            <span>{props.value} {props.unit}</span>
        </p>
    )
}

export default InfoItem;