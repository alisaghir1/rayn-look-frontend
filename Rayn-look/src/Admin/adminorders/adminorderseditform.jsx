import logo from "../../assets/images/rayn-look-logo1.png"

const Ordersedit = ({onClose}) => {
    return(
        
    
        <div className='Whole-order-edit-form'>
        <img src={logo} />
         <form  className='order-Edit-Form'>
           <div className="form-group">
            
           <label htmlFor="category">Order Name:</label>
       <input
         type="text"
         id="Name"
         name="Name"

       />
     </div>
     <div className="form-group">
       <label htmlFor="title">Order Location:</label>
       <input
         type="text"
         id="Location"
         name="Location"

       />
     </div>
     <div className="form-group">
       <label htmlFor="description">Order Phone Number:</label>
       <input
         type="text"
         id="Number"
         name="Number"

       />
     </div>
     <div className="form-group">
       <label htmlFor="targetAmount">Order Email:</label>
       <input
         type="text"
         id="Email"
         name="Email"

       />


           </div>


           <div className="form-group">
       <label htmlFor="description">Order Date:</label>
       <input
         type="date"
         id="Date"
         name="Date"

       />
     </div>

     <div className="form-group">
       <label htmlFor="description">Order Total Amount:</label>
       <input
         type="text"
         id="Amount"
         name="Amount"

       />
     </div>

           <button type="submit" className="btn btn-primary">Submit</button>
           <button type="button" onClick={onClose}>Close</button>
         </form>
      
       </div>
    ) 
}

export default Ordersedit