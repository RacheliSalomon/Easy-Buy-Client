
import React, { useEffect, useRef, useContext } from "react";
//import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import UserProfile from '../userProfile/UserProfile';
import Bell from '../bell/Bell';
import PopupSearch from '../tabmenu/popupSearch';
import UserContext from "../signin/user/UserContext";
const UserTab=() =>{
    const currentUser = useContext(UserContext);
    return (
       
            
        <div className="flex-grow-1 flex-shrink-1 flex align-items-center justify-content-end ">
        {/* <div className="flex align-items-center justify-content-center border-round m-2 ">
          <PopupSearch></PopupSearch>
            
        </div> */}
        <div className="flex align-items-center  border-round m-2 " style={{paddingLeft:"2rem",paddingRight:"1rem"}}>
            <Bell/>
        </div>


        <div className="flex align-items-center justify-content-center border-round m-2 ">
           <UserProfile/>
            
        </div>
        

        </div>
     
    );
}
    

export default  UserTab