import "./adminorders.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Adminordersrow from "./adminordersrow";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import axios from "axios";

const Adminorders = () => {

// const [orders,setorders] = useState()

// useEffect(() => {
//   fetchOrders();
// }, [orders]);



// const fetchOrders = async () => {
//   try {
//   const response = await axios.get(`http://localhost:8080/Order`,
//   // {
//   //     headers: {
//   //       Authorization: `Bearer ${user.token}`,
//   //     },
//   //   }
//     );
//   // console.log(userId)
//   const data = response.data;
//   console.log(data);
//   setorders(data);
//   // console.log(data)
//   } catch (error) {
//   console.log(error);
//   setorders(null);
//   }
// };
  
    return(
  
  <div className="Admin-display-container">
          <div className="admin-orders-search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
  <table className="orders-table">
	<tbody>
		<tr>
			<td>Name</td>
			<td>Location</td>
			<td>Phone number</td>
			<td>Email</td>
			<td>Date</td>
			<td>Total amount</td>
			<td>Products</td>
            <td>Options</td>
		</tr>
<Adminordersrow />
<Adminordersrow />
<Adminordersrow />
<Adminordersrow />
<Adminordersrow />

	</tbody>
</table>
  
        </div>
  
  )
}

export default Adminorders
