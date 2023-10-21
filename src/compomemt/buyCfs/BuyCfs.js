
import React, { useState, useRef, useEffect } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";
import Payment from './Payment';
import Details from './Ditals';
import Confirm from './Confirm';


{/* <Payment index={setActiveIndex} ></Payment> */}
{/* <Details index={setActiveIndex} ></Details> */}
{/* <Confirm></Confirm> */}
const BuyCfs=(props) =>{
   
    const nevigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(props.step);
    const toast = useRef(null);
    
    const[currentStep,setCurrentStep]=useState(null)
    const[readOnlyDetails,setReadOnlyDetails]=useState(true)
    const[readOnlyPayment,setReadOnlyPayment]=useState(true)
    const[readOnlyConfirmation,setReadOnlyConfirmation]=useState(true)


    
    const items = [
        {
            label: 'Details',
            readOnly:{readOnlyDetails}
            
           
        },
        {
            label: 'Payment',
            readOnly:{readOnlyPayment}
            
            
           
        },
        {
            label: 'Confirmation',
            readOnly:{readOnlyConfirmation}
            
        }
    ];
    useEffect(
        ()=>{
            if(activeIndex==0){setCurrentStep(<Details index={setActiveIndex} credit={props.credit} ></Details>);setReadOnlyDetails(false)}
                else{
                    if(activeIndex==1) {setCurrentStep(<Payment index={setActiveIndex} ></Payment>);setReadOnlyPayment(true)}
                        else{setCurrentStep( <Confirm reload={props.reload} credit={props.credit}></Confirm> );setReadOnlyConfirmation(true)}}
            }
    ,[activeIndex])
    
    






    return (
        <>
        <div className="card">
            <Toast ref={toast}></Toast>
            <Steps model={items} activeIndex={activeIndex}   />
        </div>
       
            {currentStep}
  
        
        </>
    )
}
         

export default  BuyCfs
