
import React, { useState, useRef, useEffect, useContext } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { useNavigate } from "react-router-dom";
import { Rating } from 'primereact/rating'
import { Chip } from 'primereact/chip'
import { Avatar } from 'primereact/avatar'
import Payment from './Payment';

// import { PrimeReact } from 'primereact/utils';
// import { Ripple } from 'primereact/ripple';
// PrimeReact.ripple = true;





const Like = () => {
    return (
        <Card className='transition-colors transition-duration-500 bg-white-500 hover:bg-yellow-500 text-black hover:text-gray-900'>
            <label>150$</label>
            {/* <Rating value={5} cancel={false} readonly={true} className='   pt-3 flex align-items-center justify-content-center'></Rating> */}

        </Card>
    );
}


const Details = (props) => {


    const currentCredit =props.credit;

    const nevigate = useNavigate();

    const cardHeader = (
        <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="250" />
        // <img className="w-9 shadow-2 border-round" src={`https://primefaces.org/cdn/primereact/images/product/${props.data.shop.IMAGE}`} alt={props.data.shop.SHOP_NAME}  />
    );

    const cardFooter = (
        <div className='flex align-items-center justify-content-center'>
            <Button label="Buy Me!" icon="pi pi-cart-plus" onClick={() => { props.index(1) }} className="p-button-text" />
        </div>
    );

    const [rate, setRate] = useState();
    useEffect(() => {
        const rate1 = currentCredit?.PRICE / currentCredit?.credit.CREDIT_AMOUNT
        if (rate1 == 1)
            setRate(3)
        else {
            if (rate1 >= 0.9 && rate1 <= 1)
                setRate(4)
            else {

                setRate(5)
            }
        }
    },[currentCredit])

 
    return (
        <div className='cursor-auto'>
            <div className="grid">


                <div className="border-right-1 border-yellow-200 col-4 align-content-center flex-wrap ">
                    {/* <Image src={"https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg"} alt="Image" width="250" /> */}
                    {/* <div> We sell it in <label className='text-yellow-500 text-2xl'>{props.data.PRICE}$</label></div> */}

                    <h1 className='text-2xl text-600 text-center'>This credit contains {currentCredit?.credit.CREDIT_AMOUNT}$,</h1>
                    <h1 className='text-2xl text-yellow-500  pb-3 text-center'>But you can get it in {currentCredit?.PRICE}$!</h1>
                    <div className='flex justify-content-center'><Chip label={currentCredit?.credit.purchase.customer.NAME} image= {currentCredit?.credit.purchase.customer.IMAGE} className='m-2  w-max'  /></div>

                    <Rating value={rate} cancel={false} readOnly={true} className='m-2 mb-4 mt-3 flex align-items-center justify-content-center'></Rating>
                    <div className='flex justify-content-center align-self-end'><Button label="Buy Me!" icon="pi pi-cart-plus" onClick={() => { props.index(1) }} className="p-button-text align-self-end m-0" /></div>
                </div>

                <div className='flex flex-column col-8' >
                    <div className="grid">
                        <div className='col-12 border-bottom-1 border-yellow-200 mt-0 pt-0 mb-2 pb-4'>
                            <p className='mt-0 pt-0 ml-3 mb-2'>Credit details</p>
                            <div className="grid ml-3">
                                <div className="col-4"><lable className='text-base font-normal'>Date of issue</lable><br></br><label className='font-medium'>{currentCredit?.credit.DATE_OF_ISSUE.split("T")[0]}</label></div>
                                <div className="col-4"><lable className='text-base font-normal'>Expiration date</lable><br></br><label className='font-medium'>{currentCredit?.credit.EXPIRATION_DATE.split("T")[0]}</label></div>
                                <div className="col-4"><lable className='text-base font-normal'>Credit amount</lable><br></br><label className='font-medium'>{currentCredit?.credit.CREDIT_AMOUNT}$</label></div>

                            </div>
                        </div>
                        <div className='col-12 pl-4 pt-3 pb-2'>
                            {/* <div className='grid'> */}
                            {/* <div className='col-4 flex flex-column'> */}

                            {/* <Image src={props.data.credit.purchase.shop.IMAGE} alt="Image" height='75' /> */}
                            {/* <Image src={"https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg"} alt="Image"  height='100' className='ml-2 mb-2'/> */}

                            {/* <Chip label={props.data.credit.purchase.customer.NAME} image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className='m-2' /> */}
                            {/* </div> */}
                            {/* <div className='col-8 flex flex-column '> */}
                            <h1 className='text-2xl text-600 m-0 mb-4'>You would like it 👍</h1>
                            <div className='grid '>
                                <div className='col-3'><Like></Like></div>
                                <div className='col-3'><Like></Like></div>
                                <div className='col-3'><Like></Like></div>
                                <div className='col-3'><Like></Like></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>{props.data.credit.purchase.shop.SHOP_NAME}</div> */}
            </div>

        </div>
        // </div>

        // </div>
    );
}

export default Details