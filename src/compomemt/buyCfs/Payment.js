import React from 'react'; 
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import  { useState } from "react";
import { InputMask } from "primereact/inputmask";
import{Image}from 'primereact/image'

 const Payment=(props) =>{


    const[NameOnCard,setNameOnCard]=useState('')
    const[cardNumber,setcardNumber]=useState('')
    const[mmDd,setMmDd]=useState('')
    const[cvc,setCvc]=useState('')
    
    
    return (

    <div className="flex justify-content-between flex-wrap bg-primary-reverse cursor-auto " >
            
            <div className=" card flex w-7 flex-row justify-content-left mt-0 pt-0 ">
                
                <div className="card flex flex-column ">
                        <h2 className='text-left ml-5 text-600'>Now You Get 60$ credit </h2>
                        <h3 className='text-left text-xl ml-5  text-top text-bottom'> and Earn 10$</h3>
   
                </div>
               
               
                
            </div>
                        
            
            <div className=" card flex flex-column card-container border-noround  w-5" >
                

                <label  className="font  mb-3 mt-3 align-items-start text-lg font-semibold">Card information</label>

                <div className="p-inputgroup flex-1 mt-3 mb-3">
                        <span className="p-inputgroup-addon"><i className='pi pi-money-bill'></i></span>
                        <InputNumber placeholder='1234 1234 1234 1234'useGrouping={false} onValueChange={(e) => setcardNumber(e.value)}/>       
                </div>

                <div className="p-inputgroup flex-1  mt-3 mb-3">
                        <span className="p-inputgroup-addon"><i className='pi pi-calendar'></i></span>
                        <InputMask value={mmDd} onChange={(e) => setMmDd(e.target.value)} mask="99/99" placeholder="99/99" slotChar="mm/yy"/>


                        <span className="p-inputgroup-addon text-base font-normal">CVC</span>
                        <InputText placeholder='cvc'   onChange={(e) => setCvc(e.target.value)}/>
                </div>
                <div className="p-inputgroup flex-1 mt-3 mb-3">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-user"></i>
                    </span>
                        
                  
                        <InputText  placeholder='Name on Card' onChange={(e) => setNameOnCard(e.target.value)}/>
                       
                   
                </div>

                    <Button label='Pay 60$' onClick={()=>{props.index(2)}} className='mt-6'/>
            </div>
    </div>

    )
}
        
export default  Payment





