
import { Chip } from 'primereact/chip';

import { Badge } from 'primereact/badge';
import{Avatar} from 'primereact/avatar'
import  React, { useEffect, useRef, useContext,useState } from "react";

//import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import {Dialog} from 'primereact/dialog'
import {useNavigate} from 'react-router-dom'
import UserContext from "../signin/user/UserContext";
import Update from './Update';
const UserProfile=()=> {
    const menu = useRef(null);
   // const router = useRouter();
   const currentUser = useContext(UserContext);

   const nevigate=useNavigate();
    const toast = useRef(null);
    const [visible, setVisible] = useState(false);

    const items = [
        {
            label: 'Options',
            items: [
                
                {
                    label: 'Chat',
                    icon: 'pi pi-whatsapp',
                    url: 'https://reactjs.org/'
                }
            ]
        },
        {
            label: 'Account',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-user',
                    command: () => {
                        console.log("update");
                        setVisible(true);
                        
                    }
                },
                {
                    label: 'Log out',
                    icon: 'pi pi-sign-out',
                    command: () => {
                        toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                }
                
            ]
        }
    ];
    const header=(
        <div className='flex justify-content-center bg-purple-100 h-5  align-content-end'>
        <Avatar image={currentUser.IMAGE} imageFallback={<i className='pi pi-user'></i> } className="mr-2 bg-white " size="xlarge" />
        </div>
    );
    const footer=(
        <div className='flex justify-content-center align-content-end pb-2'>
        <Button icon='pi pi-user-edit w-full px-4 ' className='surface-400 border-none '></Button>
        
        </div>
    );

    return (
        <>

            <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menu} />
            {/* <Button label="Show" icon="pi pi-bars" onClick={(e) => menu.current.toggle(e)} /> */}
            <div className="flex align-items-center justify-content-center border-round m-2 ">
            <Avatar image={currentUser?.IMAGE} size="large" shape="circle" style={{}} onClick={(e) => menu.current.toggle(e)}/>
            </div>


            <Dialog visible={visible} className='w-7' onHide={() => setVisible(false)} header={header} footer={footer}> <Update/></Dialog>

        </>
    
    )
}
      

export default  UserProfile