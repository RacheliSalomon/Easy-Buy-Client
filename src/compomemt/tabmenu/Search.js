
import React from "react";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";

import ReactDOM from "react-dom/client";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import 'primeflex/primeflex.css';                                   // css utility
import "./design/index.css";
import "./design/flags.css";

const Search = (props) => {
  const { data, setData } = props
  console.log(data)
  function find(element, txt) {
    for (let key in element) {
 
      console.log(element[key])
      if (typeof (element[key]) != 'string') {
        if (toString(element[key]).includes(txt)) {
          return true;
        }
      }
      else {
        if (element[key].includes(txt)) {
          return true;
        }
      }
    }
    return false;
  }


  const globalSearch = (txt) => {
    let foundData = data.filter(element => { find(element, txt) })
    setData(foundData)
  }

  return (
    <div className=" hidden flex align-items-center justify-content-end  border-round m-2 ">
      <div className="p-input-icon-left">
        <i className="pi pi-search"></i>
        <InputText type="search" placeholder="Search..." onInput={(e) => globalSearch(e.target.value)} />
      </div>
    </div>
  )
}


export default Search;