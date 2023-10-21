import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from './products';
import { useFunc } from '../../Hook/useFunc'
import { InputText } from 'primereact/inputtext';
import Search from '../tabmenu/Search';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { useNavigate } from "react-router-dom";
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import 'primeflex/primeflex.css';
import BuyCfs from '../buyCfs/BuyCfs'
import Details from '../buyCfs/Ditals';
import { Toast } from 'primereact/toast';



const CreditForSale = () => {
    const { getData } = useFunc();
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData('cfs', "", "").then((data) => { setProducts(data.data); SetFilterData(data.data);});
    },[]);

  
  

    // const header = (
    //     <div className="flex flex-wrap align-items-center justify-content-between gap-2">
    //         <span className="text-xl text-900 font-bold">Products</span>
    //         <Search data={products} setData={setProducts}></Search>
    //     </div>
    // );



    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const [filters, setFilters] = useState({
        "credit.purchase.shop.SHOP_NAME": { value: null, matchMode: FilterMatchMode.CONTAINS },
        "credit.CREDIT_AMOUNT": { value: null, matchMode: FilterMatchMode.IN },
        PRICE: { value: null, matchMode: FilterMatchMode.IN },
        "credit.EXPIRATION_DATE": { value: null, matchMode: FilterMatchMode.IN },

    });

    const[filterData,SetFilterData]=useState(products);
    const my_filter=(str)=>{
        const newData=products.filter(s=>{return s.credit.EXPIRATION_DATE.includes(str)||s.credit.purchase.shop.SHOP_NAME.includes(str)||(String)(s.PRICE).includes(str)||(String)(s.credit.CREDIT_AMOUNT).includes(str)})
        SetFilterData(newData)
        
      }
    const renderHeader = () => {
        return (
            <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                <span className="text-xl text-900 font-bold">Buy Credits Now!</span>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText  onChange={(e) =>my_filter(e.target.value)} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const header = renderHeader();


    const footer = "";

    const nevigate = useNavigate();

    const [visible, setVisible] = useState(false);

    const [selectedProduct, setSelectedProduct] = useState(null);




    const [selected, setSelected] = useState(null)



    const onRowSelect = (event) => {
        
        setSelected(event.data)
  
        setVisible(true);
    };

    const onRowUnselect = (event) => {

    };
    

    const shopImage=(product)=>{
        console.log(product);
        return(
        <img
        className="w-3  "
        src={product.credit.purchase.shop.IMAGE}
        alt={product.SHOP_NAME}
      />
    );
        }

    return (
        <div className="card">
            <DataTable value={filterData} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}
                selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="ID"
                onRowSelect={onRowSelect} onRowUnselect={onRowUnselect} metaKeySelection={false}  >

                <Column field="credit.purchase.shop.IMAGE" body={shopImage} header="Shop" sortable style={{ width: '25%' }} ></Column>
                <Column field="credit.CREDIT_AMOUNT" header="Amount" sortable style={{ width: '25%' }}></Column>
                <Column field="PRICE" header="Price" sortable style={{ width: '25%' }}></Column>
                <Column field="credit.EXPIRATION_DATE" header="Expiry Date" sortable style={{ width: '25%' }}></Column>

                {/* <Column  body={buyNow}></Column> */}
            </DataTable>

            

           
                <Dialog  header={<BuyCfs step={0} credit={selected}></BuyCfs>} visible={visible} onHide={() => {setVisible(false)}} className='w-8 ' >
                </Dialog>
           
        </div>
    );
}

export default CreditForSale