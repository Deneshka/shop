import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = [1,2,3,4,5,6]

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div style={{display:'flex'}}>
            {pages.map(page =>
                <div
                    style={{border:'1px solid #181823',padding:'5px 7px',cursor:'pointer'}}
                    key={page}
                    onClick={() => device.setPage(page)}
                >
                    {page}
                </div>
            )}
        </div>
    );
});

export default Pages;