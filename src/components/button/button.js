import React from 'react';
import cn from 'classnames';
import s from './button.module.css';

const Button = ({txt, type}) => {

    const type1 = (type === 'type1') ? true : false;
    const type2 = (type === 'type2') ? true : false;
    const type3 = (type === 'type3') ? true : false;
    const styles = cn(
        s.btn, 
        {[s.type1]: type1},
        {[s.type2]: type2},
        {[s.type3]: type3}
    );

    return (
        <button className={styles}>{txt}</button>
    )
}

export default Button;