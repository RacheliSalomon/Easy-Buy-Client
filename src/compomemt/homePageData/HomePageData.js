import { ProductService } from "./service/ProductService";
import { Button } from "primereact/button";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css"; // css utility
import "./design/index.css";
import "./design/flags.css";
import React, { useState, useEffect, useRef, useContext } from "react";
import UserContext from "../signin/user/UserContext";
import { useFunc } from "../../Hook/useFunc";

const HomePageData = (props) => {
  const { getData } = useFunc();
  const currentUser = useContext(UserContext);

  const nevigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [layout, setLayout] = useState("grid");

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data.slice(0, 12)));
  }, []);

  const [shops, setShops] = useState([]);
 
  useEffect(() => {
    getData("shop/customer/", currentUser.ID, "").then((data) =>{
      setShops(data.data);
      SetFilterData(data.data);
    }
    );
  }, []);




  const linker=(url1)=>{
   //console.log(url1);

  }
  const gridItem = (product) => {
    return (
      <div className="col-12 xs:col-6 md:col-6 xl:col-4 p-2 pt-6 border-top-1 border-500 ">
        <div
          className="p-4  surface-border surface-card border-round border-1 hover:border-3"
          
          onClick={() => {
          
            props.setShopId(product.shopID);
            nevigate("/resiptions");
          }}
        >
          <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <div className="flex align-items-center gap-2">
              {/* <i className="pi pi-tag"></i> */}
              <span className="font-semibold">{product.category}</span>
            </div>
            {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
          </div>
          <div className="flex flex-column align-items-center gap-3 py-5">
            {/* <Button className="p-0" > */}

            {/* <img className="w-9 shadow-2 border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.shop.IMAGE}`} alt={product.shop.SHOP_NAME}  /> */}
            <img
              className="w-9 shadow-2 border-round h-3"
              src={product.shop.IMAGE}
              alt={product.shop.SHOP_NAME}
            />

            {/* </Button> */}
            <div className="text-3xl font-bold text-center ">
              {product.shop.SHOP_NAME.toUpperCase()}
            </div>
            <div className="font-semibold  text-500 text-center text-md">
              {product.shop.ADDRESS.toUpperCase()}
            </div>
            {/* <div className="font-semibold  text-500 w-2 text-2xl mt-0 mb-0 text-center ">{product.ADDRESS}</div> */}

            {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
          </div>
          <div className="flex align-items-center justify-content-between">
            <span className="text-2xl font-semibold">
              <i className="pi pi-tags" style={{ fontSize: "1.5rem" }}></i>
            </span>
            <Button
              icon="pi pi-link"
              className="p-button-rounded"
              disabled={product.shop.SITE === null}
              onClick={linker(product.shop.SITE)}

              
            ></Button>
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (data) => {
    if (!data) {
      return;
    }
    return gridItem(data);
  };

  const header =(
      
          <div className="flex justify-content-center w-full bg-white">
              <div className="p-input-icon-left bg-white w-full ">
                  <i className="pi pi-search"></i>
                  <InputText type="search" className="w-full" placeholder="Search..." onChange={(e) =>my_filter(e.target.value)} />
              </div>
          </div>
 
  );

const[filterData,SetFilterData]=useState(shops);

const my_filter=(str)=>{
  const newData=shops.filter(s=>{return s.shop.SHOP_NAME.includes(str.toUpperCase())||s.shop.SHOP_NAME.includes(str)||s.shop.ADDRESS.includes(str)||s.shop.ADDRESS.includes(str.toUpperCase())})
  SetFilterData(newData)
  
}
 

  return (
    
      <div >

        <DataView value={filterData} itemTemplate={itemTemplate} layout={layout} header={header} />
      </div>
   
  );
};
// header={header()

export default HomePageData;
