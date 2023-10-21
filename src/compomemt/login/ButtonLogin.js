
import { Button } from 'primereact/button';
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';
 const ButtonLogin=()=> {
    return (
        <div className="card flex justify-content-center pt-3">
            
            <Button label="Login" icon="pi pi-user" raised />
     </div>
    )
}
        
export default ButtonLogin