import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const CreateAccount= async(detailsOfCustomer)=>
{
  console.log(detailsOfCustomer);
  try{
    const res= await axios.post('http://localhost:2000/account', 
    detailsOfCustomer);
    console.log(res);
  }
  catch(err){
  console.error(`error ${err}`);
  }

}

