import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { clearCart } from '../Redux/CartSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';




const CheckoutPage = () => {
 const cartItems = useSelector((state) => state.cart);
 const [loading, setLoading] = useState(false)
 const [firstName, setFirstName] = useState('')
 const [lastName, setLastName] = useState('')
 const [address, setAddress] = useState('')
 const [email, setEmail] = useState('')
 const [phoneNumber, setPhoneNumber] = useState('')
 const [additionalInformation, setAdditionalInformation] = useState('')

 const dispatch = useDispatch()
 const navigate = useNavigate()


 const totalPrice = cartItems.reduce((total, item) => total + item.Price * item.quantity, 0);

 const userData = { 
  products: cartItems.map(item => ({ product: item._id, quantity: item.quantity })),
  userInfo: [firstName, lastName, email, phoneNumber, address, additionalInformation],
  totalPrice: totalPrice
 }
 
 const handleSubmit = async (event) => {
  event.preventDefault();
   setLoading(true)
   try{
    console.log(userData)
     const response = await axios.post('http://localhost:8080/order', userData)
     console.log(response)
     dispatch(clearCart());
     setLoading(false);
   }catch(err){
     console.log(err)
   }
   finally {
    await Swal.fire({
      title: "Than you for your order!",
      text: "Our delivery will contact you soon!",
      icon: "success"
    });
    navigate('/')
  }
 }




  return (
     <div className='m-5'>
    <form onSubmit={handleSubmit}   className='custom-checkout-page-main-div mt-5 rounded-4' style={{border: '1px solid #b69f2c', boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)'}} >
      <h3 className='text-center text-warning2' style={{fontSize: '2.5rem'}}>Delivery Address</h3>
      <div className='text-center mb-5 opacity-50' style={{fontSize:'1rem'}}>Fill out your informations to complete the order</div>

  <div className="row mb-4">
    <div className="col">
      <div data-mdb-input-init className="form-outline">
        <label className="form-label" htmlFor="form6Example1" >First name</label>
        <input placeholder='Please enter your first name' required onChange={(e) => setFirstName(e.target.value)} type="text" id="form6Example1" className="form-control" />
      </div>
    </div>
    <div className="col">
      <div data-mdb-input-init className="form-outline">
        <label className="form-label" htmlFor="form6Example2">Last name</label>
        <input placeholder='Please enter your last name' required onChange={(e) => setLastName(e.target.value)} type="text" id="form6Example2" className="form-control" />
      </div>
    </div>
  </div>

  <div data-mdb-input-init className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example4">Address</label>
    <input placeholder='Please enter your address' required onChange={(e) => setAddress(e.target.value)} type="text" id="form6Example4" className="form-control" />
  </div>

  <div data-mdb-input-init className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example5">Email</label>
    <input placeholder='example@gmail.com' required onChange={(e) => setEmail(e.target.value)} type="email" id="form6Example5" className="form-control" />
  </div>

  <div data-mdb-input-init className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example6">Phone number</label>
    <input pattern='[0-9]{8}' placeholder='12345678' required onChange={(e) => setPhoneNumber(e.target.value)} type="tel" id="form6Example6" className="form-control" />
  </div>

  <div data-mdb-input-init className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example7">Additional information</label>
    <textarea placeholder='Please enter any additional information ' onChange={(e) => setAdditionalInformation(e.target.value)} className="form-control" id="form6Example7" rows="4"></textarea>
  </div>
  <div className='d-flex justify-content-start'>
  <button  data-mdb-ripple-init type="submit" className="btn bg-warning1 btn-block mb-5 custom-checkout-page-button w-100 h-25">  {loading ? (
    <div className="spinner-border text-dark" role="status" style={{ width: '1.5rem', height: '1.5rem' }}>
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : (
    'Place order'
  )}</button>
  </div>
</form>
</div>
  )
}

export default CheckoutPage