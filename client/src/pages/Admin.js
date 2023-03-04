import React, {useContext, useState} from 'react';
import '../css/NavBar.css'
import Modal from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import {Context} from "../index";
const Admin = () => {

    const [brandVis , setBrandVis] = useState(false)
    const [deviceVis, setDeviceVis] = useState(false)
    const [typeVis, setTypeVis] = useState(false)


    return (
        <section style={{background:'#E9F8F9'}}>
            <div className='container'>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <button onClick={() => setTypeVis(true)} className='admin_btn btn'>Добавить Тип</button>
                    <button onClick={() => setBrandVis(true)} className='admin_btn btn'>Добавить Бренд</button>
                    <button onClick={() => setDeviceVis(true)}  className='admin_btn btn'>Добавить Устройство</button>


                </div>
                <CreateBrand show={brandVis} onHide={() => setBrandVis(false)}/>
                <CreateDevice show={deviceVis} onHide={() => setDeviceVis(false)}/>
                <CreateType show={typeVis} onHide={() => setTypeVis(false)}/>
            </div>

            ]

        </section>

    );
};

export default Admin;