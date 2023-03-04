import React, {useContext} from 'react';
import '../sass/home.scss'
import radio from '../home_icons/radio.png'
import one from '../home_icons/cl_logo2.png'
import two from '../home_icons/cl_logo4.png'
import tree from '../home_icons/cl_logo5.png'
import four from '../home_icons/cl_logo7.png'
import headset from '../home_icons/наушник.png'
import column from '../home_icons/COLUMN.png'
import {Context} from "../index";
import rating from "../components/svg/Rating";
import Rating from "../components/svg/Rating";
import {SHOP_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const Home = ({}) => {

    const history = useNavigate()






    return (
        <div className='section'>
            <div className='container'>
                <div className='big-box'>
                    <div className='box'>
                        <div className='box-text'>
                            <h1 className='title-shop'><span >Захватывающее место</span><br/>
                            для всей семьи, чтобы делать покупки.</h1>
                            <p>Более 1,5 млн хороших одзывов и довольных покупателей</p>

                            <div className='box-btn'>
                                <button onClick={() => history(SHOP_ROUTE)} className='btn-shopNow'>Купить сейчас</button>
                                <div className='price'>21 000 c</div>
                                <div className='ago-price'>25 000 c</div>
                             </div>
                        </div>

                        <img src={radio} alt=""/>
                    </div>
                    <div className='box-icons'>
                        <img src={one} alt=""/>
                        <img src={two} alt=""/>
                        <img src={tree} alt=""/>
                        <img src={four} alt=""/>
                    </div>

                    <div className='box-card'>
                        <div className= 'card'>
                            <img src={headset}/>
                            <div className='text'>
                                <h4>Всегда в стиле!</h4>
                                <p>Покупай у нас и будь всегда в стиле!!! Ведь у нас всегда сочные сцены !!!</p>
                                <div className='priceBox'>
                                    <div className='newPrice'>1500 c</div>
                                    <div className='oldPrice'>2500 c</div>
                                </div>
                                <div>{<Rating/>}</div>
                                <button onClick={() => history(SHOP_ROUTE)}>КУПИТЬ</button>
                            </div>
                        </div>
                        <div className= 'card'>
                            <img src={column}/>
                            <div className='text'>
                                <h4>Всегда в стиле!</h4>
                                <p>Покупай у нас и будь всегда в стиле!!! Ведь у нас всегда сочные сцены !!!</p>
                                <div className='priceBox'>
                                    <div className='newPrice'>1500 c</div>
                                    <div className='oldPrice'>2500 c</div>
                                </div>
                                <div>{<Rating/>}</div>
                                <button onClick={() => history(SHOP_ROUTE)}>КУПИТЬ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;