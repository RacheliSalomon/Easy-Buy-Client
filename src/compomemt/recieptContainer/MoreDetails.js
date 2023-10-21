import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';


const MoreDetails=(props)=> {
    
    const [products, setProducts] = useState(props.data);
    console.log(products);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product) => {
        switch (product.STATUS_CODE) {
            case 0:
                return 'success';

            case 2:
                return 'warning';

            case 1:
                return 'danger';

            default:
                return null;
        }
    };


    const getValue = (product) => {
        switch (product.STATUS_CODE) {
            case 0:
                return 'BUY';

            case 1:
                return 'RETURN';

            case 2:
                return 'CREDIT';

            default:
                return null;
        }
    };
    
    // useEffect(() => {
    //     ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    // }, []);




    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3 shadow-2">
                {/* <div className="mb-3">
                    <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
                </div> */}
                <div >
                    <div className=" flex flex-wrap  justify-content-between px-3">
                        <div className=" flex flex-wrap  justify-content-start ">
                            <i className="pi pi-tags"></i>
                            <h5 className='m-0 font-medium'>{" "+product.ADDITIONAL_DESCRIPTION.toUpperCase()}</h5>
                        </div>
                        <Tag value={getValue(product)} severity={getSeverity(product)} className='font-medium'></Tag>
                    </div>
                    <h2 className="mb-1 font-medium">{product.DESCRIOTION.toUpperCase()}</h2>
                    <h4 className="mt-0 mb-3 ">${product.SUM}</h4>
                    
                    {/* <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div> */}
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}


export default  MoreDetails