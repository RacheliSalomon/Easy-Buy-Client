//import { useRouter } from 'next/router';
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";

import { Badge } from "primereact/badge";
import { TiWarningOutline } from "react-icons/ti";
import { TiWarning } from "react-icons/ti";
import { useFunc } from "../../Hook/useFunc";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../signin/user/UserContext";
import React, { useEffect, useRef, useContext } from "react";

const Bell = () => {
  const { getData } = useFunc();
  const menu = useRef(null);
  //const router = useRouter();
  const toast = useRef(null);

  const currentUser = useContext(UserContext);
  console.log("currentUser");
  console.log(currentUser);


  const [credits1, setCredits1] = useState([]);
  const [credits3, setCredits3] = useState([]);
  const nevigate = useNavigate();
  var value=0;
  
  var items = [
    {
      label: "Expired Credits",
      items: [
        // {
        //     label: '  1 Week',
        //     icon: <TiWarningOutline size={"18"}/> ,
        //     command: () => {
        //     }
        // },
        // {
        //     label: '  3 Week',
        //     icon: <TiWarning size={"18"}/> ,
        //     command: () => {
        //     }
        // }
      ],
    },
  ];

        useEffect(() => {
            getData("credit", "", `?numDays=7&customer_id=${currentUser.ID}`).then((data) =>
            setCredits1(data.data)
            );
            getData("credit", "", `?numDays=21&customer_id=${currentUser.ID}`).then((data) =>
            setCredits3(data.data)
            );
            console.log('wow');
        }, [currentUser]);

       

        
        useEffect(() => {
            credits1.forEach(() => {
            items[0].items.push({
                label: "  1 Week",
                icon: <TiWarningOutline size={"18"} />,
                command: () => {nevigate('/credits')}
                
            });
            value++;
            });
        }, [credits1]);


        useEffect(() => {
            credits3.forEach(() => {
            items[0].items.push({
                label: "  3 Week",
                icon: <TiWarning size={"18"}/> ,
                command: () => {nevigate('/credits')}
                
            });
            value++;
            });
        }, [credits3]);

  const icon = (
    <i className="pi pi-bell p-overlay-badge" style={{ fontSize: "1.5rem" }}>
      <Badge value={items[0].items.length} style={{ background: "#DEE2E6" }}></Badge>
    </i>
  );

  return (
    <>
      <Toast ref={toast}></Toast>
      <Menu model={items} popup ref={menu} />

      <i
        className="pi pi-bell p-overlay-badge"
        style={{ fontSize: "1.5rem", color: "orange" }}
        onClick={(e) => menu.current.toggle(e)}
      >
        <Badge
          value={value}
          style={{ fontSize: "0.5rem", boxSizing: "0.5rem" }}
        ></Badge>
      </i>
    </>
  );
};

export default Bell;
