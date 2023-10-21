import React from "react";
import { PanelMenu } from "primereact/panelmenu";
import { Sidebar } from "primereact/sidebar";
import { Menu } from "primereact/menu";
import { useNavigate } from "react-router-dom";

const Menue = () => {
  const nevigate = useNavigate();

  let items = [
    { label: "Chart", icon: "pi pi-fw pi-wallet" },
    {
      label: "Poliy",
      icon: "pi pi-fw pi-shield",
      command: () => {
        nevigate("/manager/policy");
      },
    },
    { label: "Club", icon: "pi pi-fw pi-tags" },
    {
      label: "Adverticments",
      icon: "pi pi-fw pi-images",
      command: () => {
        nevigate("/manager/ad");
      },
    },
  ];

  return <Menu model={items} className="border-noround" />;
};
export default Menue;
