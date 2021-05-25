import React from 'react'
import { useField } from 'formik'
import s from './Checkbox.module.scss'
import cn from 'classnames'

export const Checkbox = ({ children, ...props }) => {
  const [field] = useField({ ...props, type: 'checkbox' })
  return (
    <div>
      <input
        className={cn(s.input, 'visually_hidden')}
        type="checkbox"
        {...field}
        {...props}
        id={props.name}
      />
      <label className={s.label} htmlFor={props.name}>
        {children}
      </label>
    </div>
  )
}
