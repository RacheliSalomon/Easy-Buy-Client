
import React, { useEffect, useRef, useContext } from "react";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";
import { Button } from 'primereact/button';
import { useFunc } from "../../Hook/useFunc";
import { Messages } from "primereact/messages";
import { Dialog } from 'primereact/dialog';


const PolicyUpdate = () => {


    const msgs = useRef(null);
    const { updateData } = useFunc();
    
    const [returningDays,SetReturningDays]= useState(null);
    const [refundDays,SetRefundDays]= useState(null);
    const [changingDays,SetChangingDays]= useState(null);
    const [fullRefundDays,SetFullRefundDays]= useState(null);
    const [deductionPrecents,SetDeductionPrecents]= useState(null);
    const [allowReturningSales, setAllowReturningSales] = useState(false);
    const [visible,setVisible]= useState(false);
    var dataToUpdate={};
    const checkAndUpdate=()=>{
       
        

        if (returningDays!=null)
            dataToUpdate["RETURNING_DAYS"]=returningDays;

        if (refundDays!=null)
            dataToUpdate["REFUND_DAYS"]=refundDays;

        if (changingDays!=null)
            dataToUpdate["CHANGING_DAYS"]=changingDays;

        if (fullRefundDays!=null)
            dataToUpdate["FULL_REFUND_DAYS"]=fullRefundDays;
        
        if (deductionPrecents!=null)
            dataToUpdate["DEDUCTION_PRECENTS"]=deductionPrecents;

        var bit;
        allowReturningSales==true? bit=0:bit=1;
        dataToUpdate["DEDUCTION_PRECENTS"]=bit;
        
        setVisible(true)

        updateData("policy/shop","1",dataToUpdate).then(data=>
            {
                msgs.current.show([
                    {
                      sticky: true,
                      severity: "success",
                      summary: "Success",
                      detail: "! Update your Policy",
                      closable: false,
                    },
                    
                  ]);
            })
            .catch(err=>{console.log(err);
                msgs.current.show([
                    {
                      sticky: true,
                      severity: "error",
                      summary: "Error",
                      detail: "- Request Denied",
                      closable: false,
                    },
                  ]);});
        

        


    }
    return (
        <div className="card">
            <Messages ref={msgs} />
            <Dialog visible={visible}  onHide={() => setVisible(false)} className='w-8' >
                <div>
                    Do you shure you want to do that? {dataToUpdate.CHANGING_DAYS}
                </div>
                
               

            </Dialog>
            <div className='grid m-2 p-2 gap-7'>
                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-calendar"></i>
                    </span>
                    <InputNumber placeholder="Returnung Days" value={returningDays} onChange={(e) => {SetReturningDays(e.value)}} />
                </div>

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-calendar"></i>
                    </span>
                    <InputNumber placeholder="Refund Days" value={refundDays} onChange={(e) => {SetRefundDays(e.value)}} />
                
                </div>
                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-calendar"></i>
                    </span>
                    <InputNumber placeholder="Changing Days" value={changingDays} onChange={(e) => {SetChangingDays(e.value)}} />
                
                </div>
            </div>
            <div className='grid m-2 p-2 gap-7'>
                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">$</span>
                    <InputNumber placeholder="Full Refund Days" value={fullRefundDays} onChange={(e) => {SetFullRefundDays(e.value)}}/>
                </div>
                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">%</span>
                    <InputNumber placeholder="Deduction Precents" value={deductionPrecents}  onChange={(e) => {SetDeductionPrecents(e.value)}}/>
                </div>
                <div className="p-inputgroup flex-1">
                    <label>Allow returning in sales?</label><br></br>
                    <InputSwitch checked={allowReturningSales} onChange={(e) => setAllowReturningSales(e.value)} />
                </div>
            </div>
            <Button label='Save' className='mt-4' onClick={()=>{checkAndUpdate()}}></Button>
        </div>
        )
}
export default PolicyUpdate