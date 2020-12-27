import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useFetch} from "../hooks/useFetch";

export const Register = () => {
    const history = useHistory();
    const [form, setForm] = useState({
        fio: '',
        email: '',
        tel: '',
        password: '',
        password_confirmation: ''
    })
    const {loading, request, error} = useFetch(form);
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
        console.log(form)
    }
    const registerHandler = async (event) => {
        event.preventDefault();
        try {
            const data = await request(
                'http://magazine.test/api/register',
                'POST',
                {...form}
            )
            if(data.code === 201){
                history.push('/login');
            }
        } catch (e) {
        }
    }
    return (
        <React.Fragment>
            <div className={'form__container mt-5'}>
                <form action="" method={'POST'} className={'form__user'} onSubmit={registerHandler}>
                    <h2 className={'form__h'}>Регистрация</h2>
                    <div className="form-group">
                        <label htmlFor="fio" className={'d-block form__label'}>ФИО</label>
                        <input type="text" name={'fio'} id={'fio'}
                               className={error.fio ? 'form__invalid__input form__input__default' : 'form__input__default'}
                               onChange={changeHandler}/>
                        {error.fio ? <span className={'invalid'}>{error.fio}</span> : ''}
                    </div>
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
                        <label htmlFor="password_confirmation" className={'d-block form__label'}>Подтверждение
                            пароля</label>
                        <input type="password" name={'password_confirmation'} id={'password_confirmation'}
                               className={error.password ? 'form__invalid__input form__input__default' : 'form__input__default'}
                               onChange={changeHandler}/>
                        {error.password_confirmation ?
                            <span className={'invalid'}>{error.password_confirmation}</span> : ''}
                    </div>
                    <div className="form-group">
                        <label htmlFor="tel" className={'d-block form__label'}>Телефон</label>
                        <input type="number" name={'tel'} id={'tel'}
                               className={error.fio ? 'form__invalid__input form__input__default' : 'form__input__default'}
                               onChange={changeHandler}/>
                        {error.tel ? <span className={'invalid'}>{error.tel}</span> : ''}
                    </div>
                    <div className="form-group">
                        <input type="submit" className={'form__btn'}/>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}