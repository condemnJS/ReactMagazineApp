import React, {useEffect, useState} from 'react';
import {Input} from "../components/FormComponents/Input";
import Logo from "../assets/logo.png";
import {Button} from "../components/FormComponents/Button";
import {useDispatch} from "react-redux";
import { CLEAN_ERRORS, FETCH_AUTH_USER } from '../redux/types';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {useHistory, Link} from "react-router-dom";

export const LoginPage:React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {errors} = useTypedSelector(state => state.errors);
    const {token} = useTypedSelector(({token}: any) => token);
    const [user, setUser] = useState({email: '', password: ''});

    useEffect(() => {
        if(localStorage.getItem('token')) {
            history.push('/')
        }
        dispatch({type: CLEAN_ERRORS});
    }, [localStorage.getItem('token')]);

    const auth = async (event: MouseEvent) => {
        event.preventDefault();
        await dispatch({type: FETCH_AUTH_USER, params: user});
    }

    return (
        <div className="login__wrapper">
            <form className="form__control">
                <img src={Logo} alt=""/>
                <h3>Войти в ТатарМаркет</h3>
                <Input label="Введите почту" type="email" placeholder="qwe123@mail.ru" error={errors.body?.email}  name="email" setState={(target: string, value: string) => setUser({...user, [target]: value})}/> 
                <Input label="Введите пароль" type="password" placeholder="Tatar228" error={errors.body?.password} setState={(target: string, value: string) => setUser({...user, [target]: value})} name="password"/> 
                {errors.code === 403 && <span className="invalid_feedback mb-2">{ errors.message }</span>}
                <Button value="Авторизироватся" className="auth_btn" onClick={auth}/> 
                <Button value="Зарегистрироваться" className="reg_btn" onClick={() => history.push('/register')}/>
            </form>
        </div>
    );
}