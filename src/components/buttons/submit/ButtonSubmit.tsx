import React from 'react'
import s from './ButtonSubmit.module.scss'

export const ButtonSubmit = (props: any) => {
  return (
    <button className={s.button} type="submit" onClick={props.onClick}>
      {props.text}
    </button>
  )
}
