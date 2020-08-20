import React from 'react';

import './button.css';

const Button = ({txt, type}) => {

    let classNames = `btn btn-${type}`

    return (
        <button className={classNames}>{txt}</button>
    )
}

export default Button;