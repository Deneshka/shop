import React, {useContext} from 'react';
import {
    SHOP_ROUTE,
    REGISTRATION_ROUTE,
    BASKET_ROUTE,
    LOGIN_ROUTE,
    HOME_ROUTE,
    ADMIN_ROUTE,
    TRUE_ADMIN_ROUTE, TRUE_ADMIN
} from "../utils/consts";
import "../css/NavBar.css"
import photo from './svg/header_icon.svg'
import search from './svg/search.svg'
import basket from './svg/basket.svg'
import {observer} from 'mobx-react-lite'
import {Link} from "react-router-dom";
import {Context} from "../index";
import{useNavigate} from 'react-router-dom'

const NavBar = observer(() => {
const {user} = useContext(Context)
    const history = useNavigate()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }



    return (
        <div className="header">
            <div className="container">
                <div className="Navbar">
                    <img src={photo}/>
                    <ul className={'Navbar_ul'}>
                        <Link to={HOME_ROUTE} className={"Home link"}>Home</Link>
                        <Link to={SHOP_ROUTE} className={'Shop link'}>Shop</Link>
                        {user.isAuth ? '':<Link to={LOGIN_ROUTE} className={'Auth link'}>Auth</Link>}

                        <Link to={HOME_ROUTE} className={'About link'}>About</Link>
                        {user.isAuth ? <Link to={BASKET_ROUTE} className={'Basket link'}>Basket</Link> : ''}
                    </ul>


                    <div className={'Navbar_icons'}>



                    </div>

                    {user.isAuth ?
                        <div className={'Navbar_buttons'}>
                            {user.role ?
                            <button onClick={() => history(ADMIN_ROUTE)} className={'btn'} >Админ панель</button> : '' }

                             <button onClick={ logOut}  className={'btn'} > Выйти</button>

                        </div>
                        :
                        <button onClick={() => history(REGISTRATION_ROUTE)} className={'btn'} >Регистрация </button>
                    }

                    <Link style={{position:'absolute',zIndex:'1', color:'#181823',marginTop:'-100px',cursor:'pointer'}}
                          to={TRUE_ADMIN}
                    >.</Link>
                </div>

            </div>

        </div>
    );
});

export default NavBar;