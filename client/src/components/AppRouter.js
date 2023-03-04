import React, {Component, useContext} from 'react';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Shop from "../pages/Shop"
import Auth from "../pages/Auth"
import Admin from "../pages/Admin"
import {HOME_ROUTE,ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE,TRUE_ADMIN} from "../utils/consts";
import DevicePage from "../pages/DevicePage";
import Home from "../pages/Home";
import TrueAdmin from "../pages/trueAdmin";


const AppRouter = (observer(() => {
    const {user} = useContext(Context)

    console.log(user)



    return(
       <Routes>
           {user.isAuth ? <Route exact path={ADMIN_ROUTE} element={<Admin/>}/> : "/"}





           <Route exact path={HOME_ROUTE} element={<Home/>}/>
           <Route exact path={SHOP_ROUTE} element={<Shop/>}/>
           <Route exact path={REGISTRATION_ROUTE} element={<Auth/>}/>
           <Route exact path={DEVICE_ROUTE + '/:id'} element={<DevicePage/>}/>
           <Route exact path={LOGIN_ROUTE} element={<Auth/>}/>
           <Route exact path={TRUE_ADMIN} element={<TrueAdmin/>}/>





       </Routes>

    );
}));

export default AppRouter;





