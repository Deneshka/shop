import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import {fetchOnDevice} from "../http/deviceAPI";

const TrueAdmin = observer(() => {

    const {user} = useContext(Context)


        const adminTrue = () => {

              user.setRole(true)

        }












    return (
        <div className='container'>
            <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                <div >
                    <h1>Хотите стать Админом ?</h1>

                    <button  style={{marginRight:'70px'}} className='btn' onClick={ useEffect(() => {adminTrue()}, [])} >да</button>
                </div>
            </div>
        </div>
    );
});

export default TrueAdmin;