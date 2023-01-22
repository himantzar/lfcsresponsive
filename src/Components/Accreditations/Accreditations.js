import React from 'react'
import CamB from '../../images/Layer2-02.png' 
import Board from '../../images/1-04.png' 
import Ibsc from '../../images/1-03.png' 


function Accreditations() {
  return (
     <>
     
     <div className="containerAccr" style={{marginTop:'20px'}}>
        <div className="row">
           <div className="col-md-12 heading" >
                <h1>Accreditations</h1>
           </div> 
        </div>
        <div className="row img-blockAccr" >
            <div className="col-md-4 ">
              <img src={Board} alt="..."  className="colimg1" loading='lazy' />
           </div>
            <div className="col-md-4">
                <img src={CamB} alt="..." className="colimg2" loading='lazy'/>
            </div>
            <div className="col-md-4 " >
                <img src={Ibsc} alt="..." className="colimg3" loading='lazy'/>
            </div>
        </div>
        </div>
     
     
     
     </>

  )
}

export default Accreditations