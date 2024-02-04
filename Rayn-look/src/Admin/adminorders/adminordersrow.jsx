import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert library
import axios from "axios";

const Adminordersrow = ({data,onDelete}) => {
  const ondelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`http://localhost:8080/Order/${data._id}`);
        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        await Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        onDelete(data._id);
      } catch (error) {
        console.error('There was an error!', error);
      }
    }
  };


  return (
    <>
      <tr className="orders-table-row">
        <td>{data.userInfo[0]}</td>
        <td>{data.userInfo[1]}</td>
        <td>{data.userInfo[2]}</td>
        <td>{data.userInfo[3]}</td>
        <td>{data.userInfo[4]}</td>
        <td>{data.userInfo[5]}</td>
        <td>
  <DropdownButton id="dropdown-basic-button" title="Products" >
    {data.products.map((product, index) => (
      <Dropdown.Item key={index} >
        {product?.product?.Name} {product?.quantity}
      </Dropdown.Item>
    ))}
  </DropdownButton>
</td>
        <td className='admin-order-options'>


          <button className='btn btn-danger' onClick={ondelete}>Delete</button>

        </td>
      </tr>
    </>
  );
};

export default Adminordersrow;
