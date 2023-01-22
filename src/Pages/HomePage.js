
import React from 'react'

import Brand from './../Components/NavScroll/Brand'
import NavScroll from '../Components/NavScroll/NavScroll'
import Social from './../Components/NavScroll/Social'
import Media from './../Components/InMedia/Media'
import Testimonials from '../Components/Testimonials/Testimonials';
import NoticeBoard from '../Components/notify/NoticeBoard';
import BranchesCards from '../Components/Branches/BranchesCards';
import BannerBox from '../Components/Banner/BannerBox'; 
import IgFeeds from '../Components/InstagramFeeds/IgFeeds'; 
import LFCSFooter from '../Components/Footer/LFCSFooter';
import FacInfraStructure from '../Components/Facilities/FacInfraStructure';
import Accreditations from '../Components/Accreditations/Accreditations';


function HomePage() {
  return (
    <>
     <Social/>
     <Brand/>
     <NavScroll/>
     <BannerBox/> 
     <NoticeBoard/>
     <BranchesCards/>
     <FacInfraStructure/>
     <Accreditations/>
     <Media/> 
     <Testimonials/>
     <IgFeeds/>
     <LFCSFooter/>


    </>
  )
}

export default HomePage