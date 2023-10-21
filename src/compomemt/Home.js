import react, { useEffect } from "react";

import { Register2 } from "./signup/Register2";
import TabMenuIn from "./tabmenu/TabMenuIn";
import HomePage from "./homePage/HomePage";
import Specification from "./specification/Specification";
import RecieptPage from "./reciptPage/ReciptPage";

import RecieptContainer from "./recieptContainer/RecieptContainer";
import UploadAdverticment from "./manager/uploadAdverticment/UploadAdverticment";
import CreditForSale from "./creditForSale/CreditForSale";
import { SignIn } from "./signin/SignIn";
import BuyCfs from "./buyCfs/BuyCfs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //
import Payment from "./buyCfs/Payment";
import UserProvider from "./signin/user/UserProvider";
import { useState } from "react";
import Header from "./manager/Header";
import ManagerHome from "./manager/ManagerHome";
import HomePageData from "./homePageData/HomePageData";
import SideBar from "./tabmenu/SideBar";
import ShopProvider from "./recieptContainer/shop/ShopProvider";
import Credits from './credits/Credits'
import Sale from "./credits/Sale";
import Policy from "./manager/Policy";
import PolicyUpdate from "./manager/PolicyUpdate";

const Home = () => {
  //<Login/>
  const [userId, setUserId] = useState("");
  const [shopId, setShopId] = useState(null);

  useEffect(()=>{setUserId(localStorage.setItem("userId",""))},[])
  useEffect(()=>{setUserId(localStorage.getItem("userId"))})

  return (
    <UserProvider userId={userId}>
       <ShopProvider shopId={shopId}>
      <Router>
        <div className="App">
       
          {/* <UploadAdverticment></UploadAdverticment> */}
           {userId == "" && <SignIn setUserId={setUserId}></SignIn>}
          {userId != "" && <TabMenuIn />}   
          {/* <ManagerHome></ManagerHome> */}
          
          <Routes>
            {/* <Route exact path="/" element={<SignIn />}></Route> */}
            <Route exact path="/manager/ad" element={<UploadAdverticment />}></Route>
            <Route exact path="/manager/policy" element={<Policy />}></Route>
            <Route exact path="/manager/policy/update" element={<PolicyUpdate />}></Route>



            <Route exact path="/home" element={<HomePage />}></Route>
            <Route
              exact
              path="/shop"
              element={<HomePageData setShopId={setShopId} />}
            ></Route>
            <Route
              exact
              path="/creditForSale"
              element={<CreditForSale />}
            ></Route>
            <Route exact path="/signup" element={<Register2 />}></Route>
            <Route
              exact
              path="/uploadFile"
              element={<UploadAdverticment />}
            ></Route>
            <Route
              exact
              path="/creditForSale/buyStep1"
              element={<BuyCfs step={1} stepContent={<Payment></Payment>} />}
            ></Route>
          {/* </Routes> */}

         
            {/* <Routes> */}
              <Route
                path="/resiptions"
                element={<RecieptPage type={0} />}
              ></Route>
              <Route
                path="/returnCertificate"
                element={<RecieptPage type={1} />}
              ></Route>
              {/* <RecieptPage type={1} />} */}
              <Route path="/credits" element={<Credits></Credits>}></Route>
              {/* <Route path="/credits/sale/:id" element={<Sale></Sale>}></Route> */}
            
            </Routes>
          
        </div>
      </Router>
      </ShopProvider>
    </UserProvider>
    // <HomePage></HomePage>
  );
};
export default Home;
