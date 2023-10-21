import { useEffect, useState } from "react";
import CreditContext from "./ShopContext";

import {useFunc} from '../../../Hook/useFunc'

const ShopProvider=({children,shopId})=>{

    const {getData}=useFunc();
    const [shop,setShop]=useState({});


    useEffect(()=>{
        getData("shop/",shopId,"").then((data)=>setShop(data))
    },[shopId])


    return(
        <CreditContext.Provider value={shop}>
            {children}
        </CreditContext.Provider>
    );

}


export default ShopProvider;