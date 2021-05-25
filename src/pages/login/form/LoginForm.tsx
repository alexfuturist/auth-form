import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import s from './LoginForm.module.scss'
import { ButtonTransparent } from 'components/buttons/transparent'
import { ButtonSubmit } from 'components/buttons/submit'
import { Checkbox } from 'components/checkbox'
import { Input } from 'components/input'
import { Separator } from 'components/separator'
import { ButtonProvider } from 'components/buttons/providers'
import GoogleIcon from 'assets/img/app/google_logo.svg'
import MicrosoftIcon from 'assets/img/app/microsoft_logo.svg'

export const LoginForm = () => {
  const [submitIsPressed, setSubmitIsPressed] = useState<boolean>(false)

  type authProvidersProps = {
    id: string
    name: string
    icon: string
  }

  const authProvidersContent = [
    {
      id: 'google',
      name: 'Google',
      icon: GoogleIcon,
    },
    {
      id: 'microsoft',
      name: 'Microsoft',
      icon: MicrosoftIcon,
    },
  ]

  const AuthProviders = authProvidersContent.map(
    ({ id, name, icon }: authProvidersProps) => (
      <div className={s.button_provider_wrapper}>
        <ButtonProvider
          key={id}
          name={name}
          icon={icon}
          onClick={() => {
            console.log(id)
          }}
        />
      </div>
    )
  )

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          password: Yup.string().required('Password is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <Form>
          {AuthProviders}

          <div className={s.separator_wrapper}>
            <Separator />
          </div>

          <div className={s.text_input_wrapper}>
            <Input
              name="email"
              type="text"
              placeholder="Email"
              prassed={submitIsPressed}
            />
          </div>

          <div className={s.text_input_wrapper}>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              prassed={submitIsPressed}
            />
          </div>

          <div className={s.button_forgot_password_wrapper}>
            <ButtonTransparent text="Forgot password?" />
          </div>

          <Checkbox name="rememberMe">Remember me</Checkbox>

          <div className={s.button_continue_wrapper}>
            <ButtonSubmit
              text="Continue"
              onClick={() => setSubmitIsPressed(true)}
            />
          </div>
        </Form>
      </Formik>
    </>
  )
}
