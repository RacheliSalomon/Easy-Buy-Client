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
import ShopProvider from '../recieptContainer/shop/ShopProvider'

import Search from "./Search";

const SideBar = () => {
  const nevigate = useNavigate();
  const items = [
    {
      label: "Reciptions",
      icon: "pi pi-book",
        command: () => {
          nevigate("/resiptions");
        },
      className:'my-2 mx-1',
      
    },
    {
      label: "Credits",
      icon: "pi pi-credit-card",
        command: () => {
          nevigate("/credits");
        
        },
      className:'my-2 mx-1'
    },
    {
      label: "Return Certificates",
      icon: "pi pi-fw pi-file",
        command: () => {
          nevigate("/returnCertificate");
        },
      className:'my-2 '
    },
    {
      label: "Chat",
      icon: "pi pi-fw pi-whatsapp",
        command: () => {
          nevigate("/credits");
        },
      className:'my-2 '
    },
  ];





  
  return (
   
   
        <MegaMenu
          model={items}
          orientation="vertical"
         
          breakpoint="960px"
          className="border-noround border-right-2 border-none border-yellow-400 bg-white"
          

        />
    
   
  );
};

export default SideBar;
