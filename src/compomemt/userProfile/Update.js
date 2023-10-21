import{ListBox}from 'primereact/listbox'
import  React, { useEffect, useRef, useContext,useState } from "react";
import UserContext from "../signin/user/UserContext";
import {AutoComplete} from 'primereact/autocomplete'



const Update = (props) => {
    
    const currentUser = useContext(UserContext);

    const [selectedCity, setSelectedCity] = useState(null);
    const user = [
        { icon:"pi pi-user",name:currentUser.NAME , code: 'NY' },
        { icon:"pi pi-envelope",name: currentUser.EMAIL, code: 'RM' },
        { icon:"pi pi-phone",name: currentUser.PHONE_NUMBER, code: 'LDN' },
        { icon:"pi pi-eye-slash",name: currentUser.PASSWORD, code: 'IST' },
      
    ];




    const countryTemplate = (option) => {
        
        return (
            <div className="flex align-items-center gap-5 w-full py-3">
                <i  className={option.icon}/>
                <div>{option.name}</div>
            </div>
        );
    };


    return (
        <div className="card flex justify-content-center pb-2 mb-2 p-0 pt-4">
            <ListBox value={selectedCity} onClick={(e) => {setSelectedCity(e.value);}} options={user} optionLabel="name" className=" border-none flex justify-self-center"  itemTemplate={countryTemplate}  />
          
        </div>
    )
}








export default Update