import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Logo_Universal from '../../images/Logo_Universal.png';
import * as BsIcons from 'react-icons/bs' 
import Facebook from '../../images/1-30.png';
import instagram from '../../images/1-26.png';
import Linkedin from '../../images/1-27.png';

function LFCSFooter() {
  return (

    <>

   <MDBFooter  className='text-center text-block'  style={{ backgroundColor:'#3D3994' , color:'#FFF' }}>
    <div className="bgImgFooter"> 
      <section className=' bgImgFooterLogoB d-flex  justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='FooterBoxAli' >
              <img src={Logo_Universal}  className="Footerlogo"  alt='m' loading='lazy' />
               <h1 className='FooterHtitle'>Little Flower Children School</h1>
                <h6 className="FooterSubtitle">Affilition CBSC -New  Delhi</h6>
        </div>
        <div class="vl"></div>

         <div class="socialmediaIcons">
            {/* <i class="fab fa-facebook iconSM1  fa-4x" /> */}
            <img src={Facebook} alt='...' className="btn-loading iconSM1" loading="lazy"  />
            <img src={instagram} alt='...' className="btn-loading iconSM2" loading="lazy"  />
             <img src={Linkedin} alt='...' className="btn-loading iconSM3" loading="lazy"  />
        </div> 


        {/* <div>
          <a href="/" className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href="/" className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href="/" className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a> */}
        </section>
      <div className='bgImgFooterColor'>  
      <section >
        <MDBContainer className='text-center text-md-start mt-5' >
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-2'>
            <h3 className=' fw-bold mb-0'>About Us</h3>
              <p style={{marginBottom:'-2px'}}>
                  <a href='#!' className='text-reset' >
                  <BsIcons.BsCircleFill className='circle'/>
                  About School
                  </a>
              </p>
              <p style={{marginBottom:'-2px'}}>
                <a href='#!' className='text-reset' >
                <BsIcons.BsCircleFill className='circle'/>
                The Present Management
                </a>
              </p>
              <p style={{marginBottom:'-2px'}}>
                <a href='#!' className='text-reset' >
                <BsIcons.BsCircleFill className='circle'/>
                Director's Message
             </a>
              </p>
              <p style={{marginBottom:'-2px'}}>
                <a href='#!' className='text-reset' style={{marginBottom:'-180px'}}>
                <BsIcons.BsCircleFill className='circle'/>
                Foreword for Principal
               </a>
              </p>
              <p style={{marginBottom:'-2px'}}>
                <a href='#!' className='text-reset' style={{marginBottom:'-180px'}}>
                <BsIcons.BsCircleFill className='circle'/>
                Our Vision & Mission
               </a>
              </p>
              <p style={{marginBottom:'-2px'}}>
                <a href='#!' className='text-reset' style={{marginBottom:'-180px'}}>
                <BsIcons.BsCircleFill className='circle'/>
                Afflication
                </a>
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4' >
              <h3 className=' fw-bold mb-0' >Explore</h3>
              <p style={{marginBottom:'-2px'}}>
                  <a href='#!' className='text-reset' >
                  <BsIcons.BsCircleFill className='circle'/>
                    Home
                  </a>
              </p>
              <p style={{marginBottom:'-2px'}}>
                <a href='#!' className='text-reset' >
                <BsIcons.BsCircleFill className='circle'/>
                History
                </a>
              </p>
              <p style={{marginBottom:'-2px'}}>
                <a href='#!' className='text-reset' >
                <BsIcons.BsCircleFill className='circle'/>
                Academics
                </a>
              </p>
              <p style={{marginBottom:'-2px'}}>
                <a href='#!' className='text-reset' style={{marginBottom:'-180px'}}>
                <BsIcons.BsCircleFill className='circle'/>
                International
                </a>
              </p>
              <p style={{marginBottom:'-2px'}}>
                <a href='#!' className='text-reset' style={{marginBottom:'-180px'}}>
                <BsIcons.BsCircleFill className='circle'/>
                Awards
                </a>
              </p>
              <p style={{marginBottom:'-2px'}}>
                <a href='#!' className='text-reset' style={{marginBottom:'-180px'}}>
                <BsIcons.BsCircleFill className='circle'/>
                Contact
                </a>
              </p>
              <p style={{marginBottom:'-2px'}}>
                <a href='#!' className='text-reset' style={{marginBottom:'-180px'}}>
                <BsIcons.BsCircleFill className='circle'/>
                Privacy Policy
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-2'>
              <h3 className=' fw-bold mb-2'>Prospectus</h3>
              <p style={{marginBottom:'-2px'}}>
                <a href='#!' className='text-reset mb-0'>
                <BsIcons.BsCircleFill className='circle'/>
                School Timings
                </a>
              </p>
              <p style={{marginBottom:'-2px'}}>
                <a href='#!' className='text-reset'>
                <BsIcons.BsCircleFill className='circle'/>
                Code of Conducts
                </a>
              </p>
              <p style={{marginBottom:'-2px'}}>
                <a href='#!' className='text-reset'>
                <BsIcons.BsCircleFill className='circle'/>
                Leave Rule
                </a>
              </p>
              <p style={{marginBottom:'-2px'}}>
                <a href='#!' className='text-reset'>
                <BsIcons.BsCircleFill className='circle'/>
                School Uniform
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' >
              <div className='textContainer'>
                <h1>Email: </h1>
                <h6>principal@modernschool.net </h6>
                <h6>principal@modernschool.net </h6>

                <h1>Office Hours:</h1>
                <h6>8:00am – 3:00pm</h6>

                <h1>Telephone : </h1>
                <h6>+91 7760775875</h6>
                
              </div>


              {/* <h3 className='text-uppercase fw-bold footertitle textleftF '>Email:</h3>

              <p style={{marginBottom:'-2px'}} className='textleftF'>
                  principal@modernschool.net    
              </p>
              <p style={{marginBottom:'-2px'}} className="textleftF">
                modern@modernschool.net
              </p>

             <h6 className='text-uppercase fw-bold footertitle textleftF'>Office Hours:</h6>
        
              <p style={{marginBottom:'-2px'}} className="textleftF">
                8:00am – 3:00pm              
                </p>
            
              <h6 className='text-uppercase fw-bold footertitle textleftF'>Telephone : </h6>
              <p style={{marginBottom:'-2px'}} className="textleftF">
                +91 7760775875
              </p> */}
     
       
       
       
       
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-3 m-4 border-top' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)',paddingBottom:'-10px'  }}>
      © Copyright 2023, Little Flower Children Public School  
        {/* © 2021 Copyright:<a className='text-reset fw-bold' href='https://mdbootstrap.com/'>     MDBootstrap.com
        </a> */}
      </div>
      </div>
    </div>  
    </MDBFooter>
        
         
  
    </>
  )
}

export default LFCSFooter