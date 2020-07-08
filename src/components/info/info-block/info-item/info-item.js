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
        <div className={styles}>
            <span>{data.key}</span>
            <span>{data.value} {data.unit}</span>
            {console.log(data)}
        </div>
    )
}

export default InfoItem;