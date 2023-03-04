import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite'
import {Context} from "../index";
import DeviceItem from "./DeviceItem";
import Home from "../pages/Home";

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,auto)',columnGap:'40px',rowGap:'30px'}}>
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>,
                <Home key={device.id} device={device}/>


            )}
        </div>
    );
});

export default DeviceList;