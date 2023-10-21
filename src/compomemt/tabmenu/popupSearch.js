//import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import React, { useRef } from 'react';
import { Badge } from 'primereact/badge';
import { TiWarningOutline } from "react-icons/ti";
import { TiWarning } from "react-icons/ti";
import Search from './Search';

const PopupSearch=() =>{
    const menu = useRef(null);
    //const router = useRouter();
    const toast = useRef(null);
    
    const icon=<i className="pi pi-bell p-overlay-badge"    style={{ fontSize: '1.5rem' }}>
            <Badge value="2" style={{"background":"#DEE2E6"}}></Badge>
            </i> 
    


    return (
            <>
            <Toast ref={toast}></Toast>
            <Menu model={[<Search/>]} popup ref={menu} />
           
            <i className="hidden-md hidden-lg hidden-xl pi pi-search p-overlay-badge " style={{ fontSize: '1.5rem',"color":"orange" }} onClick={(e) => menu.current.toggle(e)} >
               
            </i>
            </>
    )
}

export default  PopupSearch