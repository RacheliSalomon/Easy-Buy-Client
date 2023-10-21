import React from "react";
import { TabMenu } from "primereact/tabmenu";
import { MegaMenu } from "primereact/megamenu";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";

import ReactDOM from "react-dom/client";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import 'primeflex/primeflex.css';                                   // css utility
import "./design/index.css";
import "./design/flags.css";
import UserProfile from "../userProfile/UserProfile";
import UserTab from "../userTab/UserTab";
import { useNavigate } from "react-router-dom";
import PopupSearch from "./popupSearch";


import Search from "./Search";

const TabMenuIn = () => {
  const nevigate = useNavigate();
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => {
        nevigate("/home");
      },
      
    },
    // {
    //   label: "Reciptions",
    //   icon: "pi pi-book",
    //   command: () => {
    //     nevigate("/resiptions");
    //   },
    // },
    // { label: "Credits", icon: "pi pi-credit-card",command:()=>{nevigate("/credits")} },
    //{ label: "Return Certificates", icon: "pi pi-fw pi-file",command:()=>{nevigate("/credits")} },
    { label: "Shops", icon: "pi pi-cart-plus",command:()=>{nevigate("/shop")} },
    { label: "Credits for Sale", icon: "pi pi-cart-plus",command:()=>{nevigate("/creditForSale")} },
    //{ label: "Club", icon: "pi pi-tags" },
  ];

  const start = (
    <img
      alt="logo"
      src="src\assets\images\logo.png"
      height="40"
      className="mr-2"
    ></img>
  );

  const end = (
    <div className="flex justify-content-start flex-wrap card-container blue-container sm:mr-0 ">
      {/* <Search ></Search> */}
      
      <UserTab></UserTab>
    </div>
  );




  
  return (
   
  
        <MegaMenu
          model={items}
          orientation="horizontal"
          start={start}
          end={end}
          breakpoint="960px"
          className="border-500 border-noround border-bottom-2 border-none px-5 bg-white"
     

        />
   
   
  );
};

export default TabMenuIn;
