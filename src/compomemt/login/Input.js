import React, { useState } from "react";
import { InputText } from "primereact/inputtext";



const Input = (props) => {
    
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center pt-7 pb-0">
            <InputText   placeholder={props.text} value={value} onChange={(e) => setValue(e.target.value)} style={{"width":"14.7rem"}} />
         </div>
    )
}


//$inputBg: #ffffff;
export default Input;