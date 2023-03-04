import React, {useContext, useEffect} from 'react';
import '../css/shop.css'
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrand, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pagination from "../components/pages";
import Pages from "../components/pages";

const Shop = observer(() => {

    const {device} = useContext(Context)


    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrand().then(data => device.setBrands(data))
        fetchDevices(null,null,6,10).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)

        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id,device.selectedBrand.id,device.page,10).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    } ,[ device.selectedType,device.selectedBrand, device.page])

    return (
        <div style={{background:'#537FE7'}} className='section'>
            <div className='container'>
                <div style={{display:'flex'}} className='Shop-box'>
                    <div style={{display:'flex',flexDirection:'column'}} >

                        <div className='TypeBar'><TypeBar/></div>
                        <div style={{alignSelf:'start',
                            width:'200px', margin:'50px', marginLeft:'0px'}}
                             className='BrandBar'><BrandBar/></div>


                    </div>
                    <div style={{display:'flex',flexDirection:'column',rowGap:'50px'}} >
                        <DeviceList/>
                        <Pages/>
                    </div>

                </div>

            </div>

        </div>
    );
})

export default Shop;