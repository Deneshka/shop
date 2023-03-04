import React, {useContext, useState} from 'react';
import '../../css/shop.css'
import reset from "../svg/reset.png";
import {Context} from "../../index";
import {useEffect} from "react";
import {createDevice, createType, fetchBrand, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateDevice = observer( ({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])
    const [brandId,setBrandId] = useState(null)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrand().then(data => device.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }





    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId',device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id )
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }


    return (

        <div>
            <div>
                {show && (
                <div className="modal">
                    <div className="modal-content">

                        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>  <h2>Добавить устройство</h2> <button onClick={onHide} style={{ background:'transparent',height:'20px' ,border:'0px'}} ><img style={{width:'20px'}} src={reset}/></button> </div>
                        <hr/>



                        <div>
                            <div>
                                <h4>Выберите тип</h4>

                                <select style={{width: '100%' , marginTop:'10px',height:'40px ', fontSize:'18px ',background:'transparent',border:'0px'}}>

                                    {device.types.map(type => <option
                                        onClick={() => device.setSelectedType(type)}
                                        key={type.id}

                                    >
                                        {type.name}
                                    </option>)}

                                </select>

                            </div>
                            <hr/>

                            <div>
                                <h4>Выберите бренд</h4>
                                <select style={{width: '100%', marginTop:'10px' , height:'40px ', fontSize:'18px '}}>

                                    {device.brands.map(brand => <option
                                        onClick={() => device.setSelectedBrand(brand)}

                                        key={brand.id}>
                                        {brand.name}
                                    </option>)}

                                </select>
                            </div>
                            <hr/>

                            <form>
                                <input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    style={{width:'100%'}}
                                    className='input_V_N_S'
                                    placeholder='Введите название устройство' type='text'/>
                            </form>

                            <form>
                                <input
                                    value={price}
                                    onChange={e => setPrice(Number(e.target.value))}
                                    style={{width:'100%'}}
                                    className='input_V_N_S'
                                    placeholder='Введите стоимость устройство' type='number'/>
                            </form>

                            <form>
                                <input onChange={selectFile} type='file'/>

                            </form>
                            <hr/>

                        </div>


                        <button style={{marginTop:'10px '}} className='button' onClick={addInfo}>Добавить новое свойство</button>


                        {info.map(i =>

                            <div  key={i.number}>
                                <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                <form >
                                    <div style={{ display:'flex', justifyContent:'space-between',columnGap:'20px' ,alignItems:'center'}}>
                                    <input
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                        className='input_V_N_S'
                                        placeholder='Введите название свойства'/>

                                    <input
                                        value={i.description}
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                        className='input_V_N_S'
                                        placeholder='Введите описание свойства'/>
                                    </div>
                                </form>
                                <button className='button' onClick={() => removeInfo(i.number)} >Удалить</button>

                                </div>
                                <button style={{margin:'10px 10px 10px 0px'}} className='button' onClick={() => removeInfo(i.number.length)}>Удалить все</button>

                            </div>


                            )}
                        <div className="modal-actions">
                            <button onClick={onHide}>Закрыть</button>
                            <button onClick={addDevice}>Добавить</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
});

export default CreateDevice;