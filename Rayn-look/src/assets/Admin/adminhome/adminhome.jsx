import "./adminhome.css"
import BasicLineChart from "./linechart"


const Adminhome = () => {
    return(
        <div className="Admin-display-container">
        <div className="admin-home-container">

            
<div className="product-counter"></div>
<div className="order-counter"></div>

        </div>



<BasicLineChart />



        </div>
    )
}
export default Adminhome