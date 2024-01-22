import "./adminorders.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Adminordersrow from "./adminordersrow";
import TextField from "@mui/material/TextField";
const Adminorders = () => {
  
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
