import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/icons8-github.svg'
function Footer  ()  {
  return (
    <footer className="footer" >
      <Container >
        <Row className="align-items-center" >
          
          <Col size={12} sm={6} style={{marginTop:'20px'}}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" style={{marginTop:'20px'}}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/omar-wael-035265205/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/omar.king.1401933" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/3mar_wael/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
              <a href='https://github.com/omarwaels'target="_blank"><img src={navIcon4} alt="Github"></img></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;
