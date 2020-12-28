import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useFetch} from "../hooks/useFetch";

export const Login = () => {
    const history = useHistory() // For redirects
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const {loading, request, error} = useFetch(form)
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value}) // Return new object where key it is input name and value it's value input
    }
    const loginHandler = async (event) => { // Logics of Login
        event.preventDefault();
        try {
            const data = await request(
                'http://magazine.test/api/login',
                'POST',
                {...form}
            )
            console.log(data);
            if (data.code === 200) {
                history.push('/');
                localStorage.setItem('token', JSON.stringify(data.body.token));
            } else {
                throw new Error('Что пошло не так')
            }
        } catch (e) {
        }
    }
    return (
        <React.Fragment>
            <div className={'form__container mt-10'}>
                <form action="" method={'POST'} className={'form__user'} onSubmit={loginHandler}>
                    <h2 className={'form__h'}>Авторизация</h2>
                    <div className="form-group">
                        <label htmlFor="email" className={'d-block form__label'}>Email</label>
                        <input type="email" name={'email'} id={'email'}
                               className={error.email ? 'form__invalid__input form__input__default' : 'form__input__default'}
                               onChange={changeHandler}/>
                        {error.email ? <span className={'invalid'}>{error.email}</span> : ''}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className={'d-block form__label'}>Пароль</label>
                        <input type="password" name={'password'} id={'password'}
                               className={error.password ? 'form__invalid__input form__input__default' : 'form__input__default'}
                               onChange={changeHandler}/>
                        {error.password ? <span className={'invalid'}>{error.password}</span> : ''}
                    </div>
                    <div className="form-group">
                        <input type="submit" className={'form__btn'}/>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}