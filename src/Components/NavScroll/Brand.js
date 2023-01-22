import React from 'react'
import Logo_Universal from '../../images/Logo_Universal.png';
function Brand() {
  return (
    <>
    <div className="navcontainer">
    <nav className="navbar navbar-expand-lg navbar-customB">
      <div class="container-fluid Brandimg ">
        <img src={Logo_Universal}   alt='m' loading='lazy'/>
         <div className='navbar-brand ms-2  navbar-customBt'>
                <h1 className="title">Little Flower Children School</h1>
             <h6 className="subtitle">Affilition CBSC -New  Delhi</h6>
        </div>
            <button type="button" class="btn btn-dark btnAd ">Admissions</button>
             <button type="button" class="btn btn-dark btnCt ">Contact</button>

        {/* <div className="BtnCont">
             <button type="button" class="btn btn-dark btnAd ">Admissions</button>
             <button type="button" class="btn btn-dark btnCt ">Contact</button>
        </div> */}
      </div>
    </nav>
  </div>
  </>
  )
}

export default Brand
