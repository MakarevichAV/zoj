import React from 'react';
import cn from 'classnames';
import s from './button.module.css';

const Button = ({txt, classType, type, onClick}) => {

    const type1 = (classType === 'type1') ? true : false;
    const type2 = (classType === 'type2') ? true : false;
    const type3 = (classType === 'type3') ? true : false;
    const styles = cn(
        s.btn, 
        {[s.type1]: type1},
        {[s.type2]: type2},
        {[s.type3]: type3}
    );

    return (
        <button type={type} className={styles} onClick={onClick}>{txt}</button>
    )
}

export default Button;