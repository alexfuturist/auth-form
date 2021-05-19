import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import s from "./form.module.scss";
import ButtonTransparent from 'components/common/form/buttons/transparent/transparent';
import ButtonProviderGoogle from 'components/common/form/buttons/providers/google/google';
import ButtonProviderMicrosoft from 'components/common/form/buttons/providers/microsoft/microsoft';
import ButtonSubmit from 'components/common/form/buttons/submit/submit';
import FormSeparator from 'components/common/form/elements/separator/separator';
import MyInput from 'components/common/form/inputs/text-input/input';
import MyCheckbox from 'components/common/form/inputs/checkbox/checkbox';

const LoginForm = (props) => {
    const [submitIsPressed, setSubmitIsPressed] = useState<boolean>(false);

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
                    password: Yup.string()
                        .required('Password is required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>

                    <div className={s.button_provider_wrapper}>
                        <ButtonProviderGoogle />
                    </div>

                    <div className={s.button_provider_wrapper}>
                        <ButtonProviderMicrosoft />
                    </div>

                    <div className={s.separator_wrapper}>
                        <FormSeparator />
                    </div>

                    <div className={s.text_input_wrapper}>
                        <MyInput
                            name="email"
                            type="text"
                            placeholder="Email"
                            flag={submitIsPressed}
                        />
                    </div>

                    <div className={s.text_input_wrapper}>
                        <MyInput
                            name="password"
                            type="password"
                            placeholder="Password"
                            flag={submitIsPressed}
                        />
                    </div>

                    <div className={s.button_forgot_password_wrapper}>
                        <ButtonTransparent text="Forgot password?" />
                    </div>

                    <MyCheckbox name="rememberMe">
                        Remember me
                    </MyCheckbox>

                    <div className={s.button_continue_wrapper}>
                        <ButtonSubmit text="Continue" onClick={() => setSubmitIsPressed(true)} />
                    </div>

                </Form>
            </Formik>
        </>
    );
};

export default LoginForm;