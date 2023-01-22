import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

  import { Button } from 'react-scroll';
  
  
  import BgBan from '../../images/LFCSBanner-02.png'
  import MauBanner from '../../images/2-01.jpg'
  
function BannerBox() {
  return (
    <>
    <div className="CarouselContainer ">
       <div className="CarouselBox">
       <MDBCarousel showControls dealy={3000} >
            <MDBCarouselItem
                className='CarouselImages d-block'
                itemId={1}
                src={BgBan}
                alt='...'
            />
            <MDBCarouselItem
                className='CarouselImages d-block'
                itemId={2}
                src={MauBanner}
                alt='...'
            />
            <MDBCarouselItem
                className='CarouselImages d-block'
                itemId={3}
                src={BgBan}
                alt='...'
            />
        </MDBCarousel>            
          {/* <div class="form-outline">
            <input type="text" id="form12" class="form-control" />
            <label class="form-label" for="form12">Mobile</label>
            <button type="button" class="btn btn-dark btnCall ">Contact</button>

          </div> */}
          {/* <div className="CarouselBoxForm">
          <div class="row">
            <div class="col-md-12">
            <h1 className='Carouseltitle'>Admission Enquiry</h1>
            <input type="text" placeholder="Enter Email" name="email" id="email"  required/>
            <button type="button" class="btn btn-dark btnCall ">Contact</button>
             </div>
          </div> */}

            <div className="row g-3 align-items-center">
              <div className="col-autoT">
                  <h1 className='Carouseltitle'>Admission Enquiry</h1>
              </div>
              <div className="col-auto">
                <input type="text"  class="form-control inputCallA" placeholder="Mobile" />
              </div>
              <div className="col-auto">
              <button type="button" className="btn btn-Dark btnCallA ">Yes, Call Me</button>
              </div>
            </div>
       </div>   
    </div>    
    </>
  )
}

export default BannerBox
