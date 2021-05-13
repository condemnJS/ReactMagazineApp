import React, {useEffect, useState} from 'react';
import {Input} from "../components/FormComponents/Input";
import Logo from "../assets/logo.png";
import {Button} from "../components/FormComponents/Button";
import {useDispatch, useStore} from "react-redux";
import { CLEAN_ERRORS, REGISTER_USER_FETCH } from '../redux/types';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {useHistory, Link} from "react-router-dom";

export const RegisterPage:React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {errors} = useTypedSelector(state => state.errors);
    const {user_id} = useTypedSelector(state => state.user_id);
    const [user, setUser] = useState({email: '', password: '', tel: '', fio: '', password_confirmation: ''});
    useEffect(() => {
        if(user_id) {
            history.push('/login')
        }
    }, [user_id]);

    const register = async (event: MouseEvent) => {
        event.preventDefault();
        // dispatch({type: CLEAN_ERRORS});
        dispatch({type: REGISTER_USER_FETCH, params: user});
    }
    return (
        <div className="login__wrapper">
            <form className="form__control">
                <img src={Logo} alt=""/>
                <h3 className="title_register">Зарегистрироваться в ТатарМаркет</h3>
                <Input label="ФИО" type="text" placeholder="Гизатулин Султан Камильевич" error={errors.body?.fio}  name="fio" setState={(target: string, value: string) => setUser({...user, [target]: value})}/>
                <Input label="Email" type="email" placeholder="qwe123@mail.ru" error={errors.body?.email}  name="email" setState={(target: string, value: string) => setUser({...user, [target]: value})}/>
                <Input label="Телефон" type="tel" placeholder="89525552525" error={errors.body?.tel}  name="tel" setState={(target: string, value: string) => setUser({...user, [target]: value})}/>
                <Input label="Введите пароль" type="password" placeholder="Tatar228" error={errors.body?.password} setState={(target: string, value: string) => setUser({...user, [target]: value})} name="password"/>
                <Input label="Подтвердите пароль" type="password" placeholder="Tatar228" error={errors.body?.password_confirmation} setState={(target: string, value: string) => setUser({...user, [target]: value})} name="password_confirmation"/>
                <Button value="Зарегистрироваться" className="auth_btn" onClick={register}/>
                <Button value="Авторизироваться" className="reg_btn" onClick={() => history.push('/login')}/>
            </form>
        </div>
    );
}
