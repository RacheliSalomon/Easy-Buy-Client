

import React, { useState, useEffect } from 'react';
import useAxios from 'axios-hooks'
import axios from 'axios'

//import { useEffect } from 'react'; params: {
  //  id: '1'
    
//  }})
//import axios from 'react-axios'${url}/${param}
 const  getDataWithQuery= async(url,params,query)=>
  {
    
    try{
      var res= await axios.get(`http://localhost:2000/${url}/${params}`,{params: {
            id:query
          
    }})
      
    }
    catch(err){
    console.error(`error ${err}`);
    }
    console.log(res);
    return res.data
};


export default getDataWithQuery


