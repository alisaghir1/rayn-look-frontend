import logo from "../../assets/images/rayn-look-logo1.png"

const Ordersedit = ({onClose}) => {
    return(
        
    
        <div className='Whole-order-edit-form'>
        <img src={logo} />
         <form  className='order-Edit-Form'>

<div class="form-outline" data-mdb-input-init>
<label class="form-label" for="formControlLg">Name</label>
  <input type="text" id="formControlLg" class="form-control form-control-lg" />

</div>


<div class="form-outline" data-mdb-input-init>
<label class="form-label" for="form12">Location</label>
  <input type="text" id="form12" class="form-control" />

</div>



<div class="form-outline" data-mdb-input-init>
<label class="form-label" for="form12">Phone Number</label>
  <input type="tel" id="form12" class="form-control" />

</div>


<div class="form-outline" data-mdb-input-init>
<label class="form-label" for="form12">Email</label>
  <input type="text" id="form12" class="form-control" />

</div>


<div class="form-outline" data-mdb-input-init>
<label class="form-label" for="form12">Date</label>
  <input type="date" id="form12" class="form-control" />

</div>



<div class="form-outline" data-mdb-input-init>
<label class="form-label" for="form12">Total Amount</label>
  <input type="number" id="form12" class="form-control" />

</div>


           <button type="submit" className="btn btn-primary">Submit</button>
           <button type="button" onClick={onClose}>Close</button>
         </form>
      
       </div>
    ) 
}

export default Ordersedit