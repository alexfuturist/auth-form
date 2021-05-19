import React from 'react';
import s from './transparent.module.scss';

const ButtonTransparent = (props: any) => {
    return (
        <button className={s.button} type="button" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default ButtonTransparent;