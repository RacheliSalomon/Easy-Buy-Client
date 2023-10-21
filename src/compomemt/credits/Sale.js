import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';


import { InputNumber } from 'primereact/inputnumber';
import { useFunc } from '../../Hook/useFunc';
import { useParams } from 'react-router-dom';

export default function Sale(props) {

    const [showMessage, setShowMessage] = useState(false);

    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState();
    const { postData } = useFunc();
    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const params = useParams();

    const post = async () => {

        if(value>props.creditSum){
            return;
        }

        const x = {
            "PRICE": value,
            "creditID": props.creditId,

        }


        await postData("cfs", x);

    }

    const footerContent = (
        <div className="flex justify-content-between p-2">
            {/* <Button icon="pi pi-angle-left "   rounded text severity="danger" aria-label="Cancel"  onClick={() => setVisible(false)} />
            <Button icon="pi pi-angle-right" rounded text severity="success" aria-label="Search" onClick={() => { post(); setShowMessage(true); setVisible(false) }} /> */}
            <i className="pi pi-angle-left" style={{ color: 'red' ,fontSize: '1.5rem'}} onClick={() => setVisible(false)}></i>
            <i className="pi pi-angle-right" style={{ color: 'green',fontSize: '1.5rem' }} onClick={() => {post(); setShowMessage(true); setVisible(false) }}></i>
        </div>
    );



    const header=(
        <div className="p-0 m-0 pb-5">Selling your credit</div>
    )
    return (<>

        <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
            <div className="flex justify-content-center flex-column pt-6 px-3">
                <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                <h5>Registration Successful!</h5>
                <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                    Your item is listed in <b>{value}$</b> .
                </p>
            </div>
        </Dialog>
        <div >
            <Button icon="pi pi-shopping-cart " size="large" rounded text severity="warning" aria-label="Cancel" onClick={() => setVisible(true)} />

            <Dialog header={header} visible={visible} breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '30vw' }}footer={footerContent} onHide={() => setVisible(false)}>
                <div className="flex flex-column mt-3 pb-5">
                    <label htmlFor="integeronly" className="block mb-4 text-center text-lg">Selling for how much?</label>
                    <InputNumber value={value} onValueChange={(e) => setValue(e.value)} min={0} max={props.creditSum} className="flex  align-self-center p-0 m-0" />
                </div>
            </Dialog>
        </div>
    </>

    )
}
