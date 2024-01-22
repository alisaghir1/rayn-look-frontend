import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import {Link} from 'react-router-dom'

const FrequentlyAsked = () => {
  const [collapseOne, setCollapseOne] = useState(false);
  const [collapseTwo, setCollapseTwo] = useState(false);
  const [collapseThree, setCollapseThree] = useState(false);
  const [collapseFour, setCollapseFour] = useState(false);
  const [collapseFive, setCollapseFive] = useState(false);
  const [collapseSix, setCollapseSix] = useState(false);
  const [collapseSeven, setCollapseSeven] = useState(false);
  const [collapseEight, setCollapseEight] = useState(false);

  const handleToggle = (collapse) => {
    switch (collapse) {
      case 'collapseOne':
        setCollapseOne(!collapseOne);
        break;
      case 'collapseTwo':
        setCollapseTwo(!collapseTwo);
        break;
      case 'collapseThree':
        setCollapseThree(!collapseThree);
        break;
      case 'collapseFour':
        setCollapseFour(!collapseFour);
        break;
      case 'collapseFive':
        setCollapseFive(!collapseFive);
        break;
      case 'collapseSix':
        setCollapseSix(!collapseSix);
        break;
      case 'collapseSeven':
        setCollapseSeven(!collapseSeven);
        break;
      case 'collapseEight':
        setCollapseEight(!collapseEight);
        break;
      default:
        break;
    }
  };

  return (
    <>
    <div className='m-3 custom-text-fqs'>Frequently Asked Questions</div>
    <div className="accordion" id="accordionExample">
    <div className="bg-transparent p-2" style={{borderTop:'1px solid gray', borderBottom: '1px solid gray' }}>
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button
              className="btn text-warning1"
              type="button"
              onClick={() => handleToggle('collapseOne')}
              aria-expanded={collapseOne}
              aria-controls="collapseOne"
              style={{border:'none', transition:'1s'}}
            >
              Are our colored contact lenses certified?
            </button>
          </h2>
        </div>
        <div  id="collapseOne" className={`collapse ${collapseOne ? 'show' : ''}` } aria-labelledby="headingOne" data-parent="#accordionExample" >
          <div className="card-body opacity-75 m-2 w-100">
          Yes, our colored contact lenses are certified from the Health Ministry of Lebanon, ensuring they meet the highest standards of safety and quality.
          </div>
        </div>
      </div>

      <div className="bg-transparent p-2" style={{ borderBottom: '1px solid gray' }}>
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <div className='d-flex justify-content-between'>
            <button
              className="btn text-warning1"
              type="button"
              onClick={() => handleToggle('collapseTwo')}
              aria-expanded={collapseTwo}
              aria-controls="collapseTwo"
              style={{border:'none'}}

            >
              How much do our colored contact lenses cost?
            </button>
            <p className='fa fa-arrow'></p>
            </div>
          </h2>
        </div>
        <div id="collapseTwo" className={`collapse ${collapseTwo ? 'show' : ''}`} aria-labelledby="headingTwo" data-parent="#accordionExample">
                   <div className="card-body opacity-75 m-2 w-100">

                   The cost of colored contact lenses at Rayn-Look is only $25. We believe everyone deserves access to beautiful and affordable colored contact lenses.

          </div>
        </div>
      </div>

      <div className="bg-transparent p-2" style={{ borderBottom: '1px solid gray' }}>
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <button
              className="btn text-warning1"
              type="button"
              onClick={() => handleToggle('collapseThree')}
              aria-expanded={collapseThree}
              aria-controls="collapseThree"
              style={{border:'none'}}
            >
              What are colored contact lenses?
            </button>
          </h2>
        </div>
        <div id="collapseThree" className={`collapse ${collapseThree ? 'show' : ''}`} aria-labelledby="headingThree" data-parent="#accordionExample">
                   <div className="card-body opacity-75 m-2 w-100">

              Colored contact lenses are designed to change the color of your eyes temporarily, usually for cosmetic purposes. They are safe for daily wear when used correctly.
          </div>
        </div>
      </div>
      <div className="bg-transparent p-2" style={{ borderBottom: '1px solid gray' }}>
        <div className="card-header" id="headingFour">
          <h2 className="mb-0">
            <button
              className="btn text-warning1"
              type="button"
              onClick={() => handleToggle('collapseFour')}
              aria-expanded={collapseFour}
              aria-controls="collapseFour"
              style={{ border: 'none' }}
            >
              How do I take care of colored contact lenses?
            </button>
          </h2>
        </div>
        <div id="collapseFour" className={`collapse ${collapseFour ? 'show' : ''}`} aria-labelledby="headingFour" data-parent="#accordionExample">
          <div className="card-body opacity-75 m-2 w-100">
            To take care of colored contact lenses, always wash your hands before handling them, use a recommended contact lens solution, and follow the care instructions provided.
          </div>
        </div>
      </div>

      {/* Case Five */}
      <div className="bg-transparent p-2" style={{ borderBottom: '1px solid gray' }}>
        <div className="card-header" id="headingFive">
          <h2 className="mb-0">
            <button
              className="btn text-warning1"
              type="button"
              onClick={() => handleToggle('collapseFive')}
              aria-expanded={collapseFive}
              aria-controls="collapseFive"
              style={{ border: 'none' }}
            >
           How long can I wear Rayn-Look contact lenses?
            </button>
          </h2>
        </div>
        <div id="collapseFive" className={`collapse ${collapseFive ? 'show' : ''}`} aria-labelledby="headingFive" data-parent="#accordionExample">
          <div className="card-body opacity-75 m-2 w-100">
            
Rayn-Look contact lenses can be worn for up to one year, provided that the solution is changed regularly.
          </div>
        </div>
      </div>

      {/* Case Six */}
      <div className="bg-transparent p-2" style={{ borderBottom: '1px solid gray' }}>
        <div className="card-header" id="headingSix">
          <h2 className="mb-0">
            <button
              className="btn text-warning1"
              type="button"
              onClick={() => handleToggle('collapseSix')}
              aria-expanded={collapseSix}
              aria-controls="collapseSix"
              style={{ border: 'none' }}
            >
              Do they come with solution and a case?
            </button>
          </h2>
        </div>
        <div id="collapseSix" className={`collapse ${collapseSix ? 'show' : ''}`} aria-labelledby="headingSix" data-parent="#accordionExample">
          <div className="card-body opacity-75 m-2 w-100">
           
    The lenses are provided with a case but do not include a solution. For all our lenses, you will need to separately purchase solution to take care of your lenses.
          </div>
        </div>
      </div>

      {/* Case Seven */}
      <div className="bg-transparent p-2" style={{ borderBottom: '1px solid gray' }}>
        <div className="card-header" id="headingSeven">
          <h2 className="mb-0">
            <button
              className="btn text-warning1"
              type="button"
              onClick={() => handleToggle('collapseSeven')}
              aria-expanded={collapseSeven}
              aria-controls="collapseSeven"
              style={{ border: 'none' }}
            >
              Do you offer delivery services outside of Lebanon?
            </button>
          </h2>
        </div>
        <div id="collapseSeven" className={`collapse ${collapseSeven ? 'show' : ''}`} aria-labelledby="headingSeven" data-parent="#accordionExample">
          <div className="card-body opacity-75 m-2 w-100">
           
Yes, we provide delivery to 99% of countries worldwide through our courier options. Please check with us for specific details based on your location.
          </div>
        </div>
      </div>

      {/* Case Eight */}
      <div className="bg-transparent p-2">
        <div className="card-header" id="headingEight">
          <h2 className="mb-0">
            <button
              className="btn text-warning1"
              type="button"
              onClick={() => handleToggle('collapseEight')}
              aria-expanded={collapseEight}
              aria-controls="collapseEight"
              style={{ border: 'none' }}
            >
              
What eye color should I choose?
            </button>
          </h2>
        </div>
        <div id="collapseEight" className={`collapse ${collapseEight ? 'show' : ''}`} aria-labelledby="headingEight" data-parent="#accordionExample">
          <div className="card-body opacity-75 m-2 w-100">
            
If you're uncertain and need assistance in choosing a color, please reach out to our support agent<Link className='text-warning1' to={'/'} > Here </Link>.
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FrequentlyAsked;

