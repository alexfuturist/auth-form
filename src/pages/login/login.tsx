import React from 'react'
import { ButtonTransparent } from 'components/buttons/transparent'
import { LoginForm } from './form'
import s from './Login.module.scss'

export const Login = () => {
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <h1 className={s.title}>Log in</h1>
        <div className={s.register_wrapper}>
          <p className={s.register_text}>Don’t have an account?</p>
          <ButtonTransparent text="Sign up" />
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
