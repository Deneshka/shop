import React from 'react';
import basket from './svg/basket.svg'
import{useNavigate} from 'react-router-dom'
import {BASKET_ROUTE, DEVICE_ROUTE} from "../utils/consts";
import Home from "../pages/Home";

const DeviceItem = ({ device}) => {
    const history = useNavigate()


    return (
        <div onClick={() => history(DEVICE_ROUTE + '/' + device.id)} >
            <img style={{width:"300px",height:'auto',cursor:'pointer'}} src={process.env.REACT_APP_API_URL + device.img}/>
            <div style={{display:'flex' ,justifyContent:'space-between'}}>
                <div>{device.name}</div>

                <div style={{display:"flex",columnGap:"5px",alignItems:'center'}}>
                    <div>{device.rating}</div>
                    <img style={{cursor:'pointer'}} onClick={() => history(BASKET_ROUTE)} src={basket}/>
                </div>
            </div>
            <div>{device.description}</div>
        </div>

    );
};

export default DeviceItem;