import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <div>
            <ul>
                {device.types.map(type =>
                <li style={{cursor:'pointer',listStyleType:'none',padding:'6px 9px'  ,border:'1px solid #181823'}}

                    onClick={() => device.setSelectedType(type)}
                      key={type.id}>
                    {type.name}
                </li>
                )}
            </ul>

        </div>
    );
});

export default TypeBar;