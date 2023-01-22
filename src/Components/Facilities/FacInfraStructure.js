import React from 'react' 

import Icon1 from '../../images/Facilities/Icons-05.png';
import Icon2 from '../../images/Facilities/Icons-06.png';
import Icon3 from '../../images/Facilities/Icons-07.png';
import Icon4 from '../../images/Facilities/Icons-08.png';
import Icon5 from '../../images/Facilities/Icons-09.png';
import Icon6 from '../../images/Facilities/Icons-10.png';
import Icon7 from '../../images/Facilities/Icons-11.png';
import Icon8 from '../../images/Facilities/Icons-12.png';

function FacInfraStructure() {
  return (
    <>
      <div className="containerF" style={{marginTop:'20px', marginBottom:'-120px'}}>
        <div className="row">
           <div className="col-md-12 headingF" >
            <h1>Facilities & Infrastructure</h1>
           </div> 
        </div>
    <div className="containerF" style={{marginTop:'-50px'}}>
        <div className="row img-blocknc" >
              <span className='dot'>
                  <img src={Icon1} alt=".." className="IconDot" />
             <h3 className='iconTitle'>Library</h3>
              </span>
              <span className='dot'>
              <img src={Icon2} alt=".."  className="IconDot"/>
                <h3 className='iconTitle'>Sports</h3>
              </span>
              <span className='dot'>
              <img src={Icon3} alt=".." className="IconDot" />
              <h3 className='iconTitle1'>Laboratories</h3>
              </span>
              <span className='dot'>
              <img src={Icon4} alt=".." className="IconDot" />
              <h3 className='iconTitle'>Cafeteria</h3>
              </span>
              <span className='dot'>
              <img src={Icon5} alt=".."  className="IconDot"s />
              <h3 className='iconTitle'>Transport</h3>
              </span>
              <span className='dot'>
              <img src={Icon6} alt=".." className="IconDot" />
              <h3 className='iconTitle'>Medicare</h3>
              </span>
              <span className='dot'>
              <img src={Icon7} alt=".." className="IconDot" />
              <h3 className='iconTitle'>Boarding<br/>Facility</h3>
              </span>
              <span className='dot'>
              <img src={Icon8} alt=".." className="IconDot" />
              <h3 className='iconTitle1'>Sustainability</h3>
              </span>

          </div>
        </div>
    </div>     
 
   </>
 )
}

export default FacInfraStructure;
