import { FaCircleUser } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import React from 'react';

const Adminreviewcard = ({ data, onDelete }) => {
  const ondelete = async () => {
    const shouldDelete = window.confirm('Are you sure you want to delete this review?');
    if (shouldDelete) {
      try {
        const response = await axios.delete(`http://localhost:8080/review/${data._id}`);
        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
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