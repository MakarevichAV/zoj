import React from 'react';
import cn from 'classnames';

import './info-item.css';

const InfoItem = ({data}) => {

    const styles = cn(
        'info-item', 
        {underline: data.underline},
        {important: data.important},
        {head: data.head}
    );

    return (
        <p className={styles}>
            <span>{data.key}</span>
            <span>{data.value} {data.unit}</span>
        </p>
    )
}

export default InfoItem;