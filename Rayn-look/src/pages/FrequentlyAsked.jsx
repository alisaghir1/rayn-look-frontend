import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const FrequentlyAsked = () => {



  return (
    <>
<section className="accordion accordion-flush" id="accordionFlushExample">
  <article className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed text-warning2 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Are our colored contact lenses certified?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Yes, our colored contact lenses are certified from the Health Ministry of Lebanon, ensuring they meet the highest standards of safety and quality.</div>
    </div>
  </article>

  <article className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed text-warning2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How much do our colored contact lenses cost?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> The cost of colored contact lenses at Rayn-Look is only $25. We believe everyone deserves access to beautiful and affordable colored contact lenses.</div>
    </div>
  </article>

  <article className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed text-warning2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      What are colored contact lenses?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> Colored contact lenses are designed to change the color of your eyes temporarily, usually for cosmetic purposes. They are safe for daily wear when used correctly.</div>
    </div>
  </article>

  <article className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed text-warning2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      How do I take care of colored contact lenses?
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">To take care of colored contact lenses, always wash your hands before handling them, use a recommended contact lens solution, and follow the care instructions provided.</div>
    </div>
  </article>

  <article className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed text-warning2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      How long can I wear Rayn-Look contact lenses?
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> Rayn-Look contact lenses can be worn for up to one year, provided that the solution is changed regularly.</div>
    </div>
  </article>

  <article className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed text-warning2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      Do they come with solution and a case?
      </button>
    </h2>
    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> The lenses are provided with a case but do not include a solution. For all our lenses, you will need to separately purchase solution to take care of your lenses.</div>
    </div>
  </article>

  <article className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed text-warning2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
      Do you offer delivery services outside of Lebanon?
      </button>
    </h2>
    <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> Yes, we provide delivery to 99% of countries worldwide through our courier options. Please check with us for specific details based on your location.</div>
    </div>
  </article>

  <article className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed text-warning2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
      What eye color should I choose?
      </button>
    </h2>
    <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> If you're uncertain and need assistance in choosing a color, please reach out to our support agent<Link className='text-warning2' to={'/'} > Here </Link>.</div>
    </div>
  </article>

</section>
    </>
  );
};

export default FrequentlyAsked;



