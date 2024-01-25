import "./adminhome.css"
// import BasicLineChart from "./linechart"
import   Adminreviews  from "../adminreviews/adminreviews"
import useReviewCount from "../../hooks/reviewscounterhook"
import useProductCount from "../../hooks/productcounterhook"
import useOrderCount from "../../hooks/ordervounterhook"
const Adminhome = () => {
    const reviewCount = useReviewCount();
    const productCount = useProductCount()
    const orderCount = useOrderCount()

    return(
        <div className="Admin-display-container">

        <div className="admin-home-container">

<div className="Admin-counters">
<div className="product-counter"><h1>{orderCount} <br />Orders</h1></div>
<div className="order-counter"><h1>{productCount} <br /> Products</h1></div>
<div className="Review-counter"><h1>{reviewCount} <br /> Reviews</h1></div>
</div>




{/* <BasicLineChart  className="line-chart"/> */}

</div>

        </div>
    )
}
export default Adminhome