import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/img/logo2.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import { Link } from 'react-router-dom';


function NavBar() {
    
    const [activeLink,setActiveLink] = useState('home');
    // const activeLink = useState('home');
    // const status = activeLink[0];
    // const setActiveLink = activeLink[1];
    const [scrolled, setScrolled] = useState(false);
    console.log(activeLink)
    useEffect(() => {
        const onScroll= ()=>{
            if(window.scrollY > 50){
                setScrolled(true);
            } else{
                setScrolled(false);
            }

        }
        window.addEventListener("scroll", onScroll);
        return() => window.removeEventListener("scroll", onScroll);
    },[])
    // const onUpdateActiveLink = (value) =>{
    //     setActiveLink(value)
        
        
       
    // }
  return (
    
    <Navbar expand="lg" className={scrolled ? "scrolled":''}>
       
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt='Logo' ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            <Link to={"/"} className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={()=>setActiveLink("home")}>Home</Link>
            <Link to={"/Skills"}className={activeLink === "Skills" ? "active navbar-link" : "navbar-link"} onClick={()=>setActiveLink('Skills')}>Skills</Link>
            <Link to={"/Projects"}className={activeLink === "Projects" ? "active navbar-link" : "navbar-link"} onClick={()=>setActiveLink('Projects')}>Projects</Link>
        
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'> 
            
            <a href='#'><img src={navIcon1} alt="FB"></img></a>
            <a href='#'><img src={navIcon2} alt="FB"></img></a>
            <a href='#'><img src={navIcon3} alt="FB"></img></a>

            </div>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;