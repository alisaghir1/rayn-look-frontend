import { FaCircleUser } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
 const Adminreviewcard = ({data}) =>{
    return(
        <div className="Admin-review-card">
            <div className="Admin-review-card-details">

<div className="Admin-review-card-details-first">
   <FaCircleUser className="reviews-image"/>
<h4>{data.username}</h4>

<MdDelete className="admin-reviews-delete"/>

</div>
<p>{data.Message}

</p>


</div>


        </div>
    )
 }

 export default Adminreviewcard
