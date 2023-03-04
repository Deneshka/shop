import React, {useEffect, useState} from 'react';
import star from '../components/svg/star.png'
import '../css/shop.css'
import Rating from "../components/svg/Rating";
import {useNavigate, useParams} from "react-router-dom";
import { fetchOnDevice} from "../http/deviceAPI";
import {BASKET_ROUTE} from "../utils/consts";
const DevicePage = () => {


    const[device,setDevice ] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOnDevice(id).then(data => setDevice(data))
    }, [])
    const history = useNavigate()




        return (
            <section style={{background:'#E9F8F9'}}>
        <div className='container'>
            <div style={{display:'flex' , columnGap:'20px'}}>
           <div  >
                {/*картинка*/}
                <div >
                    <img style={{width:'400px',height:'auto'}} src={process.env.REACT_APP_API_URL + device.img}/>
                </div>
                {/*цена название */}
                <div>
                    <div style={{display:'flex',alignItems:'center', justifyContent:'space-between',width:'400px',paddingRight:'10px'}}>
                    <h2 style={{
                        fontFamily: 'Hind Siliguri',
                        fontStyle: 'normal' ,
                        fontWeight: '700',
                        fontSize: '48px'
                    }}>{device.name}</h2>

                    </div>
                    <h3 style={{
                        fontFamily: 'Hind Siliguri',
                        fontStyle: 'normal' ,
                        fontWeight: '700',
                        fontSize: '38px'}}>От: {device.price} cc</h3>
                    <div> <Rating/></div>
                    <button  style={{width:'400px',height:'49px',marginTop:'20px', background:'#181823', color:'#E9F8F9'}} className='btn'>Добавить в корзину</button>
                </div>

            </div>
            {/*описание*/}
            <div style={{width:'100%'}}>
                {device.info.map((info, index) =>
                    <div key={info.id} style={{background:index % 2 === 0 ? '#181823' : 'transparent',padding:'10px',color:index % 2 === 0 ? '#E9F8F9' : '#181823'}}>
                        {info.title}:{info.description}
                    </div>
                )}
            </div>
            </div>
        </div>
            </section>
    );
};

export default DevicePage;