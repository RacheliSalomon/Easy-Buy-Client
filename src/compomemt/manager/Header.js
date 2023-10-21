import React, { useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css"; // css utility
import { useFunc } from "../../Hook/useFunc";
import{Badge} from 'primereact/badge'
import { Menu } from "primereact/menu";
import Menue from './Menue'

const Header = () => {
  const { getData } = useFunc();
  const [shop, SetShop] = useState({});
  useEffect(() => {
    getData("shop/", "1", "").then((data) => SetShop(data));
  }, []);





  const end = () => {
    return(
    <div className="gap-6 flex flex-wrap">
      <i className="pi pi-bell p-overlay-badge flex align-self-center" style={{ fontSize: "1.5rem" }}>
        <Badge value="2"></Badge>
      </i>
      <i
        className="pi pi-calendar p-overlay-badge flex align-self-center"
        style={{ fontSize: "1.5rem" }}
      >
        <Badge value="5+" severity="danger"></Badge>
      </i>
      <i
        className="pi pi-envelope p-overlay-badge flex align-self-center"
        style={{ fontSize: "1.5rem" }}
      >
        <Badge severity="danger"></Badge>
      </i>
    </div>);
  };


  return (
 
    <div className=" flex bg-yellow-400 m-0 justify-content-between  flex-wrap px-4 py-2 shadow-5 mb-5">
      <div className="flex align-content-center flex-wrap">
        <img
          alt="logo"
          src="https://primefaces.org/cdn/primereact/images/logo.png"
          height="40"
          className="mr-2"
        ></img>
        <img
          alt="shop_logo"
          src={shop.IMAGE}
          height="40"
          className="mr-2"
        ></img>

       
      </div>
      {end()}
    </div>
   
  
  );
};
export default Header;
