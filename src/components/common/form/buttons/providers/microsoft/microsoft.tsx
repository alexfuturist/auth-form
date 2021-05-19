import React from 'react';
import s from './microsoft.module.scss';

const ButtonProviderMicrosoft = (props: any) => {
    return (
        <button className={s.button} type="button" onClick={props.onClick}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.432285 0.432282H12.4016V12.4016H0.432285V0.432282Z" fill="#F35325" />
                <path d="M13.5985 0.432282H25.5678V12.4016H13.5985V0.432282Z" fill="#81BC06" />
                <path d="M0.432285 13.5984H12.4016V25.5677H0.432285V13.5984Z" fill="#05A6F0" />
                <path d="M13.5985 13.5984H25.5678V25.5677H13.5985V13.5984Z" fill="#FFBA08" />
            </svg>
            <p className={s.button_text}>
                Continue with Microsoft
            </p>
        </button>
    )
}

export default ButtonProviderMicrosoft;