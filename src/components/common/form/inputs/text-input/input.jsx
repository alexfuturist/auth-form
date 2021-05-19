import React from 'react';
import { useField } from 'formik';
import s from './input.module.scss';
import cn from 'classnames';

const MyInput = ({ ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={s.wrapper}>
            <input
                className={props.flag && meta.touched && meta.error ? cn(s.field, s.error) :
                    props.flag && meta.touched ? cn(s.field, s.touched) : s.field}
                {...field}
                {...props}
                autoComplete="off"
            />
            {props.flag && meta.touched && meta.error ? (
                <div className={s.assistive_error}>{meta.error}</div>
            ) : null}
        </div>
    );
};

export default MyInput;