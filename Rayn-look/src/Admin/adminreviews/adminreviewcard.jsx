import { FaCircleUser } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import React from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert library

const Adminreviewcard = ({ data, onDelete }) => {
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
        const response = await axios.delete(`http://localhost:8080/review/${data._id}`);
        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        await Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        onDelete(data.id);
      } catch (error) {
        console.error('There was an error!', error);
      }
    }
  };

  return (
    <div className="Admin-review-card">
      <div className="admin-review-card-first">
        <FaCircleUser className="reviews-image" />
        <h2>{data.username}</h2>
        <MdDelete className="admin-reviews-delete" onClick={ondelete} />
      </div>
      <div className="admin-review-card-second">
        <p>{data.Message}</p>
      </div>
    </div>
  );
};

export default Adminreviewcard;