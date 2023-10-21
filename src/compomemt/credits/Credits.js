
import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../signin/user/UserContext'
import ShopContext from '../recieptContainer/shop/ShopContext'
import SideBar from '../tabmenu/SideBar';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';

import { useNavigate } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility
import './index.css';
import './flags.css';
import Sale from './Sale'
import { Card } from 'primereact/card';
import { useFunc } from '../../Hook/useFunc';


const Credit = () => {
  
    const nevigate = useNavigate();
    const { getData } = useFunc();
    const [credits, setCredits] = useState([]);
    const currentUser = useContext(UserContext);
    const currentShop = useContext(ShopContext);
    
    

    useEffect(() => {
        getData("credit/customer/", currentUser.ID, `?id=${currentShop.data.ID}`).then((data) => { console.log(data.data); setCredits(data.data) });
        
    }, []);
    





    const header = () => {
        const im = Math.floor(Math.random() * 7) + 1
        return (<img alt="Card" className='w-3 pt-4 pb-0 mt-2' src={require(`E:/localclient/src/assets/money_icons/${im}.gif`)} />)
    }

    



    const footer =(id,sum)=>{
        return(
        <div className="flex flex-wrap justify-content-center gap-2 p-0 m-0">
            <Sale creditId={id} creditSum={sum}></Sale>
        </div>
    );}

    const itemTemplate = (product) => {
        // console.log("product");

        // console.log(product);
        //const sale=product.OWNER_ID==currentUser.ID||product.OWNER_ID==null?true:false;
        product = product[0]
        if (!product) return;
        return (

            <Card title={product.CREDIT_AMOUNT + "$"} footer={footer(product.ID,product.CREDIT_AMOUNT)} header={header} className="md:w-25rem m-3 pt-0 px-5">
                <h3 className='text-left'>Date of issue: {product.DATE_OF_ISSUE.split("T")[0]}</h3>
                <h3 className='text-left'>Expirnation date: {product.EXPIRATION_DATE.split("T")[0]}</h3>
            </Card>

        );
    };


    // if(credits){
    return (
        <div className="flex flex-row flex-wrap grid mt-5">

            <SideBar></SideBar>

            <div className="col-10 p-0 m-0 ml-4">

                <DataView value={credits} itemTemplate={itemTemplate} />
            </div>
        </div>
    )
    // }
}
export default Credit
