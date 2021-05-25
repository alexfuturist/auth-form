import React from 'react'
import s from './ButtonProvider.module.scss'

type ButtonProviderProps = {
  onClick: Function
  icon: string
  name: string
}

export const ButtonProvider = ({
  onClick,
  icon,
  name,
}: ButtonProviderProps) => {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      <img className={s.button_img} src={icon} alt="provider-button" />
      <p className={s.button_text}>Continue with {name}</p>
    </button>
  )
}
