  import React from 'react'
  import Locimg from '../../images/1-15.png'

function BranchesCards() {
  return (
    <>


      <div className='container'>
        <div className="BoxContainerBr">
            <div className='row'>
            <div className="col-md-12 " >
            <h1 className='headingBr'>Our Branches</h1>
           </div> 
              
              <div className="col-md-2 BoxBr shadow-5-strong">
                <img src={Locimg} alt="..."  ></img>
                  <h1>LFIS, Mau</h1>
              </div>
              <div className="col-md-2 BoxBr shadow-5-strong">
              <img src={Locimg} alt="..."  ></img>
      
              <h1>LFCS GHOSI</h1>
              </div>

              <div className="col-md-2 BoxBr shadow-5-strong" >

                <img src={Locimg} alt="..." ></img>
                <h1> LFCS Nizamuddinpura</h1>
              </div>
              <div className="col-md-2 BoxBr shadow-5-strong">
              <img src={Locimg} alt="..."  ></img>
              
              <h1>LFCS Sikhatia</h1>
              </div>
              <div className="col-md-2 BoxBr shadow-5-strong">
              <img src={Locimg} alt="..."  ></img>
              
              <h1>LFCS Ballia</h1>
              </div>
              <div className="col-md-2 BoxBr shadow-5-strong">
              <img src={Locimg} alt="..." ></img>
              
              <h1>LFCS Ballia</h1>
              </div>
            </div>
       </div> 
      </div>
   </>
    
  )
}

export default BranchesCards
