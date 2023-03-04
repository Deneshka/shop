import React from 'react';
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (

        <div>
            {device.brands.map(brand =>
                <div
                    onClick={() => device.setSelectedBrand(brand)}

                    style={{
                        width:'200px',
                        display:'flex',
                        flexDirection:'column',
                        cursor:'pointer',
                        padding:'10px',
                        border:'1px solid #181823'

                    }}
                    key={brand.id}

                >{brand.name}</div>
            )}

        </div>
    );
});

export default BrandBar;