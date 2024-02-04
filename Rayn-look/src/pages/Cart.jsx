import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

// redux imports 
import { useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../Redux/CartSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrementQuantity = (item) => {
    dispatch(updateQuantity({ productId: item._id, quantity: item.quantity + 1 }));
  };

  const handleDecrementQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ productId: item._id, quantity: item.quantity - 1 }));
    }
  };

  const handleQuantityChange = (e, item) => {
    const newQuantity = parseInt(e.target.value, 10) || 0;
    dispatch(updateQuantity({ productId: item._id, quantity: newQuantity }));
  };

  const handleNavigate = () => {
    navigate("/products");
  };

  const handleNavigateToCheckout = () => {
    navigate('/checkout');
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.Price * item.quantity, 0);

  return (
    <div className='m-5'>
      {cartItems && cartItems.length === 0 ? (
        <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: '700px' }}>
          <h1 className='opacity-75'>
            Your cart is empty
          </h1>
          <button className='btn bg-warning1 p-3 my-4' onClick={handleNavigate}>Shop Now</button>
        </div>
      ) : (
        <section className="h-100">
          <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-normal mb-0 text-warning2">Shopping Cart</h3>
                </div>
                {cartItems.map((item, index) => (
                  <div key={index} className="card-cart p-3 rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-center gap-2">
                        <div className="col-md-2 col-lg-2 col-xl-2 d-flex" style={{ aspectRatio: '1' }}>
                          <img
                            src={`http://localhost:8080/${item.Image[0]}`}
                            className="img-fluid rounded-3" alt="rayn-look-products"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <p className="lead fw-normal mb-2">{item.Name}</p>
                          <p><span className="text-muted">{item.Description}</span></p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button className="btn text-warning1 px-2" onClick={() => handleDecrementQuantity(item)}>
                            <i className="fas fa-minus">-</i>
                          </button>
                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            onChange={(e) => handleQuantityChange(e, item)}
                            value={item.quantity}
                            type="text"
                            className="form-control form-control-sm"
                          />
                          <button className="btn text-warning1 px-2" onClick={() => handleIncrementQuantity(item)}>
                            <i className="fas fa-plus">+</i>
                          </button>
                        </div>
                        <div className=" d-flex justify-content-between col-md-3 col-lg-2 col-xl-2 offset-lg-1 my-2">
                          <h5 className="mb-0">Price: ${item.Price * item.quantity}</h5>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <p className="text-danger" onClick={() => handleRemoveFromCart(item)}>
                              <i className="text-warning2"><FaTimes /></i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="card-cart">
                  <div className="card-body text-center p-3">
                    <button
                      onClick={handleNavigateToCheckout}
                      type="button"
                      className="btn bg-warning1 btn-block btn-lg w-100"
                    >
                      Proceed to Pay the Total of: ${totalPrice}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
