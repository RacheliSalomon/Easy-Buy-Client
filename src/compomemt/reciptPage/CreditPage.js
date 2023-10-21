
import React, { useState, useEffect,useContext } from 'react';
import UserContext from "../signin/user/UserContext";

import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { useNavigate } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility

import { SignIn } from '../signin/SignIn';
import { useFunc } from '../../Hook/useFunc';

//<img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} />

const CreditPage=()=>{
const c=SignIn.x;

const Credit=()=> {
const nevigate=useNavigate();
const {getData}=useFunc();

    const [products, setProducts] = useState([]);
    const [credits,setCredits]= useState([]);
    const id = useContext(UserContext);
  // const{reciepts}=get();
console.log(credits,"kkkkkkkkkkkk");
    // useEffect(() => {
    //     ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 5)));
    // }, []);
    useEffect(() => {
        //setReciepts(get())
        
       
        getData("credit/customer/",`${id}?id=1`).then((data) => setCredits(data));

    }, []);
    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const itemTemplate = (product) => {
        console.log(product);
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div  className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.ID}</div>
                            <Rating value={product.rating} readOnly cancel={false}></Rating>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{product.DATE_OF_ISSUE}</span>
                                </span>
                                <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">${product.CREDIT_AMOUNT}</span>
                            <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

//import { ImageViewer } from 'wix-style-react'
if(credits){
    return (
        <div className="card">
            <DataView value={credits} itemTemplate={itemTemplate} />
        </div>
    )}
}
}
export default CreditPage