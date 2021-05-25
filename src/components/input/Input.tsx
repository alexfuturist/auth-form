import React, { useEffect, useState } from 'react'
import { useField } from 'formik'
import s from './Input.module.scss'
import cn from 'classnames'

export const Input = ({ prassed, ...props }) => {
  const [field, meta] = useField(props)

  const pressedAndError = prassed && meta.touched && !!meta.error
  const pressedAndTouched = prassed && meta.touched

  let [inputClassName, setInputClassName] = useState(s.field)

  useEffect(() => {
    switch (true) {
      case pressedAndError:
        setInputClassName(cn(s.field, s.error))
        break
      case pressedAndTouched:
        setInputClassName(cn(s.field, s.touched))
        break
      default:
        setInputClassName(s.field)
    }
  }, [pressedAndError, pressedAndTouched])

  return (
    <div className={s.wrapper}>
      <input
        className={inputClassName}
        {...field}
        {...props}
        autoComplete="off"
      />
      {pressedAndError ? (
        <div className={s.assistive_error}>{meta.error}</div>
      ) : null}
    </div>
  )
}
