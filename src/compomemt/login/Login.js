import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility
import '../../design/index.css';
import '../../design/flags.css';
import Input from './Input';
import MyPassword from './MyPassword';
import ButtonLogin from './ButtonLogin';


//bg-center bg-no-repeat w-10rem h-10rem bg-blue-500 border-round m-3
const Login = () => {
    return (
  
     
    
            <div className="pt-8">
            <h1>Wellcome to EasyBuy</h1>

            <div className="flex justify-content-center flex-wrap card-container yellow-container">
            <div className=" surface-card text-center p-3 border-round m-9 align-items-center justify-content-center" style={{"width":"29rem"}}>
                <Input text="Email"></Input>
                <MyPassword></MyPassword>
                <ButtonLogin></ButtonLogin>
                <h3>Don’t you have an account, sign up </h3>
            </div>
            </div>
            </div>
      
    )
}




export default Login