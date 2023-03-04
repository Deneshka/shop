import React, {useContext, useState} from 'react';
import '../css/Auth.css'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer( () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const[email,setEmail ] = useState('')
    const[password,setPassword ] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history(HOME_ROUTE)
        } catch (e) {
            alert(e.user.data.message)
        }

    }
    return (
        <div className={'section'}>
            <div className='container'>
                <div className='section-box'>
                    <div style={{ border:' 1px solid #181823',
                        padding:' 100px'}} >
                        <h1 className={'Autorization'}>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
                        <form>
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className={'email_input'}
                                placeholder={'Введите ваш email...'}/>
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type='password' className={'password_input'}
                                placeholder={'Введите ваш password...'}/>
                            <div>
                                {isLogin ?
                                    <div>нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь </NavLink></div>
                                    :
                                    <div>есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите </NavLink></div>
                                }


                            </div>

                        </form>
                        <button onClick={click} className='auth_btn'>{isLogin ? 'Войти' : "Регистрация"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Auth;
