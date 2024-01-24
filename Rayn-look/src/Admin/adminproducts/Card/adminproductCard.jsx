import { MdDelete } from "react-icons/md";
import {React, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
const Adminproductcard = ({data, onDelete}) => {
    const ondelete = async () => {
        try {
          const response = await axios.delete(
            `http://localhost:8080/Product/${data._id}`,
            // {
            //   headers: {
            //     Authorization: `Bearer ${user.token}`,
            //   },
            // }
          );
          if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        } catch (error) {
          console.error('There was an error!', error);
        }
    };

    return(
        <div className="Admin-product-card">
            <div className="card mb-3" key={data._id}>
                <div className="card__img__container" style={{width: "100%", height: "auto"}}>
                    <Carousel controls={true} indicators={true} interval={null}>
                        {data.Image.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img className="card__img" src={`http://localhost:8080/${image}`} alt="" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                <div className="card__descr-wrapper">
                    <p className="card__title">{data.Name}</p>
                    <p className="card__title">{data.Description}</p>
                    <p className="card__title">{data.Price}$</p>
                    <p className="card__title">{data.Categroy}</p>
                    <div className="card__buttons">
                        <button className="button-Update"> Update </button>
                        <button className="button-Delete" onClick={() => {ondelete(); onDelete();}}> Delete </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adminproductcard
