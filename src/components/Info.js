
import { Container,Col, Row, Alert,Tab, Nav } from "react-bootstrap";

import TrackVisibility from 'react-on-screen';
export const Info = ({ status, message, onValidated }) => {

  return (
<section className="project" id="project">
      <Container>
        <Row style={{marginTop:'30px'}}>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 style={{border:"5px solid purple" }}>Personal Info </h2>
                <p>Name : Omar Wael Saad Eldwakhly<br/>Address : Dar masr compound, El Obour City, Qaluibia, Egypt<br/>Phone : 01154615235  </p>
                <h2 style={{border:"5px solid purple" }}>Education</h2>
                <p>Bachelor’s degree of Electrical Computer Engineering, Ain Shams University, Faculty of Engineering, Cairo <br/> GPA: 2.65 </p>
                <h2 style={{border:"5px solid purple" }}>Courses</h2>
                <p>FULL STACK DEVELOPER PHP Stack CERTIFICATE BY (AMIT in NasrCity)
<br/>FWD (Foundational course of Web development track)
<br/>Artificial Intelligence (AI), (National Telecommunication Institute and Itida)
<br/>Neural Networks and Deep Learning, DeeplearninAI (Coursera by Andrew Nj)
<br/>Structuring Machine Learning Projects, DeeplearninAI (Coursera by Andrew Nj)</p>
                <h2 style={{border:"5px solid purple" }}>Download CV</h2>
                <p className="vn-wisteria">

                <a href="OmarwaelsaadCV.pdf" download='Omar Wael CV.pdf' className="btn-wrap"> Download CV</a>
                </p>
              </div>}
              </TrackVisibility>
            </Col>
          </Row>

        </Container>
  </section>
  )
}
