import Header from "./Header"
import Menue from "./Menue"
import Policy from "./Policy"

const ManagerHome=()=>{

return(
    <>
    <Header></Header>
    <div className="flex flex-row flex-wrap grid">
        <div className=""><Menue></Menue></div>
        { <div className="col-10"><Policy></Policy></div> }
    </div>
    
   
    </>
)
}

export default ManagerHome