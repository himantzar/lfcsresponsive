import React from 'react'
import * as ImIcons from 'react-icons/im' 
import Facebook from '../../images/1-30.png';
import instagram from '../../images/1-26.png';
import Linkedin from '../../images/1-27.png';
import Phone from '../../images/1-28.png';
import Mail from '../../images/1-29.png';

function Social() {
  return (
    <>
        <div className="navcontainer">
            <nav className="navbar navbar-expand-lg navbar-customS">
            <div className="container-fluid">
          <ul className="navbar-nav nav-itemSMain d-flex flex-row">
            <li className="nav-itemSC" >
              <a className="nav-item " href="/">
              <img src={Phone} alt='...' className="btn-loading CallIconsNav" loading="lazy"  />
                <h6 >+91 7760775875</h6>
              </a>
            </li>
            <li className="nav-itemSM ">
              <a className="nav-link" href="/"  >
              <img src={Mail} alt='...' className="btn-loading MailIconsNav" loading="lazy"  />
                <h6>corporate@tzar.co</h6>
              </a>
            </li>
          <li className="nav-itemSi  " >
             <img src={Facebook} alt='...' className="btn-loading socialmediaIconsNav1" loading="lazy"  />
             <img src={instagram} alt='...' className="btn-loading socialmediaIconsNav2" loading="lazy"  />
             <img src={Linkedin} alt='...' className="btn-loading socialmediaIconsNav3" loading="lazy"  />
          </li>
    </ul>
  </div>

            </nav>
        </div>
    </>
  )
}

export default Social;
