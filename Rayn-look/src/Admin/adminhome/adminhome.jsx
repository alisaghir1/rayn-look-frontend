import "./adminhome.css"
import BasicLineChart from "./linechart"


const Adminhome = () => {
    return(
        <div className="Admin-display-container">

        <div className="admin-home-container">

<div className="Admin-counters">
<div className="product-counter"><h1>23000 <br />Orders</h1></div>
<div className="order-counter"><h1>1232 <br /> Products</h1></div>
<div className="Review-counter"><h1>722 <br /> Reviews</h1></div>
</div>




<BasicLineChart  className="line-chart"/>

</div>

        </div>
    )
}
export default Adminhome