import "./adminorders.css"

const Adminorders = () => {
  
    return(
  
  <div className="Admin-display-container">
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
        <tr className="orders-table-row">
			<td>Name</td>
			<td>Location</td>
			<td>Phone number</td>
			<td>Email</td>
			<td>Date</td>
			<td>Total amount</td>
			<td>Products</td>
            <td>...</td>
		</tr>
        <tr className="orders-table-row">
			<td>Name</td>
			<td>Location</td>
			<td>Phone number</td>
			<td>Email</td>
			<td>Date</td>
			<td>Total amount</td>
			<td>Products</td>
            <td>...</td>
		</tr>
	</tbody>
</table>
  
        </div>
  
  )
}

export default Adminorders
