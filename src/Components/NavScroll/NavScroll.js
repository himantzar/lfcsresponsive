import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScroll() {
  return (
     <>
       
       <Navbar collapseOnSelect expand="lg" className='bg-CustNav navbar-nav navbar-dark'  >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " style={{color:'#FFF'}} />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex mx-lg-5"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <NavDropdown title="Aboutus" renderMenuOnMount={true} id="basic-nav-dropdown" 
>
              <NavDropdown.Item href="#action/3.1">About School</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">The Present Management</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Director's Message</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Foreword for Principal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Our Vision & Mission</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Afflication</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">School Anthem</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Child Safety</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Bus Route Plane</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Prospectus" renderMenuOnMount={true} id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">School Timings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Code of Conducts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Leave Rule</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">School Uniform</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Facilities" renderMenuOnMount={true} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Compas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Library</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Computer Lab</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Science Lab</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Auditorium</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Play Ground</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Digital Classroom</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Counsellind Cell</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Infimary</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='nav-title nav-link' href="/">Admissions</Nav.Link>  
    
            <Nav.Link className='nav-title'  href="/">Branches</Nav.Link>  

            <Nav.Link className='nav-title'  href="/">News & Events</Nav.Link>  
    

            <Nav.Link className='nav-title'  href="/">Gallery</Nav.Link>  


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



     </> 
   )
}

export default NavScroll
