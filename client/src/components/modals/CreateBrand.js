import React, { useState } from "react";
import reset from '../../components/svg/reset.png'
import {createBrand} from "../../http/deviceAPI";
function CreateBrand({show,onHide}) {

    const [value, setValue] = useState('')

    return (
        <div>
            {show && (
                <div className="modal">
                    <div className="modal-content">

                      <div style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>  <h2>Добавить бренд</h2> <button onClick={onHide} style={{ background:'transparent',height:'20px' ,border:'0px'}} ><img style={{width:'20px'}} src={reset}/></button> </div>
                        <form>
                            <input
                                onChange={e => setValue(e.target.value)}
                                value={value}
                                style={{padding:'10px', fontSize: '17px'}}
                                placeholder='Введите название бренда'/>
                        </form>
                        <div className="modal-actions">
                            <button onClick={onHide}>Закрыть</button>
                            <button onClick={() =>  createBrand({name: value}).then(onHide) }>Добавить</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateBrand;

