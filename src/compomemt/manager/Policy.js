import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useFunc } from "../../Hook/useFunc";
import {Button} from 'primereact/button'
import { useNavigate } from "react-router-dom";
const Policy = () => {

    const nevigate = useNavigate();
    const [products, setProducts] = useState([]);

    const { getData } = useFunc();
    const [policy, SetPolicy] = useState({});
    useEffect(() => {
      getData("policy/shop/", "1", "").then((data) => SetPolicy(data.data[0]));
    }, []);
    console.log(policy);

    return (
        <div >
           <div ><div className='text-xl'>Returnung Days</div><div>{policy.RETURNING_DAYS}</div></div>
           <div><div className='text-xl'>Refunding Days</div><div>{policy.REFUND_DAYS}</div></div>
           <div><div className='text-xl'>Full Refunding Days</div><div>{policy.FULL_REFUND_DAYS}</div></div>
           <div><div className='text-xl'>Deduction Precents</div><div>{policy.DEDUCTION_PRECENTS}</div></div>
           <div><div className='text-xl'>Depends Credit</div><div>{policy.DEPENDS_CREDIT}</div></div>
           <div><div className='text-xl'>Changing Days</div><div>{policy.CHANGING_DAYS}</div></div>
           <div><div className='text-xl'>Allow Returnung in Sale</div><div>{policy.ALLOW_RETURNING_IN_SALE}</div></div>
           <div><div className='text-xl'>Allow Refunding in Sale</div><div>{policy.ALLOW_CHANGING_IN_SALE}</div></div>
           <Button label='Update' onClick={()=>{nevigate('manager/policy/update')}}></Button>
        </div>
    );



}
export default Policy;