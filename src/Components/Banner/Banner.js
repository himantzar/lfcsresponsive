import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer
} from 'mdb-react-ui-kit';


import BgBan from '../../images/bg.jpg'


const Banner = () => {


  

  return (
       <>

  <div className="Contanier" style={{marginTop:'77px'}}>  
    <MDBCarousel showControls dealy={3000} style={{borderBottomRightRadius: '40px' }}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={BgBan}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/041.jpg'
        width = '80%'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'    
        alt='...'
      />
    </MDBCarousel>
    </div>
       </>
    );
};

export default Banner;
