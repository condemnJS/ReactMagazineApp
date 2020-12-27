import React from 'react'
export const Login = ()=>{
    return (
        <React.Fragment>
            <div className={'form__container mt-10'}>
                <form action="" method={'POST'} className={'form__user'}>
                    <h2 className={'form__h'}>Авторизация</h2>
                    <div className="form-group">
                        <label htmlFor="email" className={'d-block form__label'}>Email</label>
                        <input type="email" name={'email'} id={'email'} className={'form__input__default'}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className={'d-block form__label'}>Пароль</label>
                        <input type="password" name={'password'} id={'password'} className={'form__input__default'}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className={'form__btn'}/>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}