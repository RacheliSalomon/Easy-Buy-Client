import { useEffect, useState } from "react";
import UserContext from "./UserContext";

import {useFunc} from '../../../Hook/useFunc'

const UserProvider=({children,userId})=>{

    const {getData}=useFunc();
    const [user,setUser]=useState({});



    useEffect(()=>{
        getData("account/",userId,"").then((data)=>setUser(data.data));  
    },[userId])


    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );

}


export default UserProvider;