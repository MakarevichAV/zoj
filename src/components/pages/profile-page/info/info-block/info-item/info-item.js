import React from 'react';
import cn from 'classnames';
import s from './info-item.module.css';

const InfoItem = ({data}) => {

    const styles = cn(
        s.item, 
        {[s.underline]: data.underline},
        {[s.important]: data.important},
        {[s.head]: data.head}
    );

    return (
        <p className={styles}>
            <span>{data.key}</span>
            <span>{data.value} {data.unit}</span>
        </p>
    )
}

export default InfoItem;