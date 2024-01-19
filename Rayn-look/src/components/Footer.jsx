import {
 FaFacebook,
 FaInstagram,
} from 'react-icons/fa';
import './components.css'

const Footer = () => {
 return (
   <footer
     className="text-center text-lg-start text-dark"
     style={{backgroundColor: "white"}}
   >
     <section
       className="d-flex justify-content-between p-4 text-white"
       style={{backgroundColor: "black"}}
     >
       <div className="me-5 text-warning1">
         <span>Get connected with us on social networks:</span>
       </div>
       <div>
         <a href="" className="text-warning1 me-4">
           <FaFacebook />
         </a>
         <a href="" className="text-warning1 me-4">
           <FaInstagram />
         </a>
       </div>
     </section>

     <section className="">
       <div className="container text-center  text-md-start">
         <div className="row mt-3">
           <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
             <h6 className="text-uppercase fw-bold text-warning1">Rayn Look</h6>
             <hr
               className=" mt-0 d-inline-block mx-auto"
               style={{width: "60px", backgroundColor: "black", height: "2px"}}
             />
             <p>
             Enhance your vision, elevate your style. See the world through a new lens at Rayn-look.
             </p>
           </div>
           <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
             <h6 className="text-uppercase fw-bold text-warning1">Useful links</h6>
             <hr
               className="mt-0 d-inline-block mx-auto"
               style={{width: "60px", backgroundColor: "black", height: "2px"}}
             />
             <p>
               <a href="#!" className="text-dark">Home</a>
             </p>
             <p>
               <a href="#!" className="text-dark">Our Products</a>
             </p>
             <p>
               <a href="#!" className="text-dark">Give us a Review</a>
             </p>
             <p>
               <a href="#!" className="text-dark">Privacy policy</a>
             </p>
             <p>
               <a href="#!" className="text-dark">F&QS</a>
             </p>
           </div>

           <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
             <h6 className="text-uppercase fw-bold text-warning1">Contact</h6>
             <hr
               className="mt-0 d-inline-block mx-auto"
               style={{width: "60px", backgroundColor: "black", height: "2px"}}
             />
             <p><i className="fas fa-home mr-3"></i>Beirut, Lebanon</p>
             <p><i className="fas fa-envelope mr-3"></i> Rayn-look@gmail.com</p>
             <p><i className="fas fa-phone mr-3"></i> + 961 78855963</p>
           </div>
         </div>
       </div>
     </section>

     <div
       className="text-center p-3"
     >
       <span className='text-warning1'>©</span> 2024 Copyright<span>@</span>Rayn-look
     </div>
   </footer>
 );
};

export default Footer;
