import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';
import Ordersedit from './adminorderseditform'; // Assuming this is the correct path to your Ordersedit component

const Adminordersrow = () => {

  const [modalShow, setModalShow] = useState(false); // Change the state variable name




  return (
    <>
      <tr className="orders-table-row">
        <td>Name</td>
        <td>Location</td>
        <td>Phone number</td>
        <td>Email</td>
        <td>Date</td>
        <td>Total amount</td>
        <td>
          <DropdownButton id="dropdown-basic-button" title="Products" >
            <Dropdown.Item href="#/action-1">Product 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Product 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Product 3</Dropdown.Item>
          </DropdownButton>
        </td>
        <td className='admin-order-options'>


          <button onClick={() => setModalShow(true)} > Edit</button>
          <button>Delete</button>
          {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Options
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={() => setModalShow(true)}>
                Edit
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </td>
      </tr>
      <Ordersedit onHide={() => setModalShow(false)} show={modalShow} />
    </>
  );
};

export default Adminordersrow;
