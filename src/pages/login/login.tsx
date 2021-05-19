import LoginForm from './form/form';
import s from './login.module.scss';
import ButtonTransparent from 'components/common/form/buttons/transparent/transparent';

const Login = () => {
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

export default Login;