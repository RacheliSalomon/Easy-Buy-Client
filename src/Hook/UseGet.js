import React, { useState, useEffect } from 'react';
import useAxios from 'axios-hooks'
//import { useEffect } from 'react';
//import axios from 'react-axios'



const useGet = (url,param) => {
  const [{ data, loading, error }, refetch] = useAxios(
    `http://localhost:2000/${url}`
  )
  useEffect(() => { console.log("error", error); }, [error]);

  return { data, loading, error, refetch }
  
};


export default useGet;