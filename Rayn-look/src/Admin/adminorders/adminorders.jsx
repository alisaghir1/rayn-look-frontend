import "./adminorders.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Adminordersrow from "./adminordersrow";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import axios from "axios";
import EyeLoader from "../../components/EyeLoader";

const Adminorders = () => {

const [orders,setorders] = useState()
const [searchTerm, setSearchTerm] = useState("");
const [loading, setLoading] = useState(false)


useEffect(() => {
  fetchOrders();
}, []);


const handleDelete = async (deletedOrderId) => {
  setorders((prevOrder) => prevOrder.filter((Order) => Order._id !== deletedOrderId));
};


const fetchOrders = async () => {
  setLoading(true)
  try {
  const response = await axios.get(`https://rayn-look-backend.onrender.com/Order`,
  // {
  //     headers: {
  //       Authorization: `Bearer ${user.token}`,
  //     },
  //   }
    );
  const data = response.data;
  setorders(data);
  setLoading(false)

  } catch (error) {
  console.log(error);
  setorders(null);
  setLoading(false)
  }
};
  
    return(
      <>
  {loading ? (<EyeLoader />) : (
  <div className="Admin-display-container">
          <div className="admin-orders-search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
  <table className="orders-table">
	<tbody>
		<tr>
			<td>first name</td>
			<td>last name</td>
			<td>Email</td>
			<td>phone number</td>
			<td>Address</td>
			<td>Additional info</td>
			<td>Products</td>
            <td>Options</td>
		</tr>

    {orders && orders .filter((data) =>
              (searchTerm === "" ||
                (data.userInfo[0] && data.userInfo[0].toLowerCase().includes(searchTerm.toLowerCase())))
            ).map((item, index) => <Adminordersrow key={index} data={item} onDelete={() => handleDelete(item._id)} />)}




	</tbody>
</table>
  
        </div>
        )}
        </>
  
  )
}

export default Adminorders
