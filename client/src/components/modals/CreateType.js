import React, {useState} from 'react';

import reset from "../svg/reset.png";
import {createType} from "../../http/deviceAPI";

const CreateType = ({show , onHide}) => {

    const [value, setValue] = useState('')




    return (
        <div>
            {show && (
                <div className="modal">
                    <div className="modal-content">

                        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>  <h2>Добавить тип</h2> <button onClick={onHide} style={{ background:'transparent',height:'20px' ,border:'0px'}} ><img style={{width:'20px'}} src={reset}/></button> </div>
                        <form>
                            <input
                                value={value} onChange={e => setValue(e.target.value)}//
                                style={{padding:'10px', fontSize: '17px'}} placeholder='Введите название типа'/>
                        </form>
                        <div className="modal-actions">
                            <button onClick={onHide}>Закрыть</button>
                            <button onClick={() =>  createType({name: value}).then(onHide) }>Добавить</button>
                        </div>
                    </div>
                </div>
            )}
             </div>
    );
};

export default CreateType;