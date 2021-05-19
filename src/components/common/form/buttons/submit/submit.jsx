import React from 'react';
import s from './submit.module.scss';

const ButtonSubmit = (props) => {
    return (
        <button className={s.button} type="submit" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default ButtonSubmit;