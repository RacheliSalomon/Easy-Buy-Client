import TabMenuIn from "../tabmenu/TabMenuIn";
import RecieptContainer from "../recieptContainer/RecieptContainer";
import SideBar from "../tabmenu/SideBar";
import CreditPage from "./CreditPage";
const RecieptPage = (props) => {
  return (
    <div className="flex flex-row flex-wrap grid mt-5">
      
      <SideBar></SideBar>
      
      <div className="col-10 p-0 m-0 ml-4">
        
        <RecieptContainer type={props.type}></RecieptContainer>
      </div>
      

    </div>
  );
};

export default RecieptPage;
