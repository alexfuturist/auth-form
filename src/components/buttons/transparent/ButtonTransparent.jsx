import React from 'react'
import s from './ButtonTransparent.module.scss'

export const ButtonTransparent = (props: any) => {
  return (
    <button className={s.button} type="button" onClick={props.onClick}>
      {props.text}
    </button>
  )
}
