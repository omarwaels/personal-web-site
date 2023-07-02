import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';

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
        <Navbar.Brand href="#home" style={{cursor: 'default'}}>
            <img src={logo} alt='Logo' ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            <Link to={"/"} className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={()=>setActiveLink("home")}>Home</Link>
            <Link to={"/Skills"}className={activeLink === "Skills" ? "active navbar-link" : "navbar-link"} onClick={()=>setActiveLink('Skills')}>Skills</Link>
            <Link to={"/Projects"}className={activeLink === "Projects" ? "active navbar-link" : "navbar-link"} onClick={()=>setActiveLink('Projects')}>Projects</Link>
            <Link to={"/Info"}className={activeLink === "Info" ? "active navbar-link" : "navbar-link"} onClick={()=>setActiveLink('Info')}>Info & CV</Link>
        
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'> 
            
            <a href='https://www.linkedin.com/in/omar-wael-035265205/' target="_blank"><img src={navIcon1} alt="Ln"></img></a>
            <a href='https://www.facebook.com/omar.king.1401933'target="_blank"><img src={navIcon2} alt="FB"></img></a>
            <a href='https://www.instagram.com/3mar_wael/'target="_blank"><img src={navIcon3} alt="Instagram"></img></a>
            

            </div>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;