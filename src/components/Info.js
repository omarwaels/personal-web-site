
import { Container,Col, Row, Alert,Tab, Nav } from "react-bootstrap";
import myPic from '../assets/img/mypic.jpg'
import uniLogo from '../assets/img/ainshams.png'
import itiLogo from '../assets/img/iti.png'
import AIcertificate from '../assets/img/microsoft-certified-azure-ai-fundamentals.png'
import TrackVisibility from 'react-on-screen';
import { List } from "react-bootstrap-icons";
export const Info = ({ status, message, onValidated }) => {

  return (
<section className="project" id="project">
      <Container>
        <Row style={{marginTop:'30px'}}>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <Container >
                  <Row style={{display:"flex",justifyContent:"center",alignItems:"center" }}>
                    <Col size={5}>
                    <img src={myPic} alt="My photo" style={{width:'350px', border:'5px solid #06609f ' ,margin:'10px'}}></img>
                    </Col>
                    <Col size={2}  >
                     
                    <img src={uniLogo} alt="Uni logo" style={{width:'180px', border:'5px solid purple ',margin:'10px'}}></img>


                    </Col>
                    <Col size={2}>
                    <img src={itiLogo} alt="ITI logo" style={{width:'180px', border:'5px solid purple',margin:'10px'}}></img>
                    </Col>
                    <Col size={2}>
                    <img src={AIcertificate} alt="AIcertificate" style={{width:'180px', border:'5px solid purple',margin:'10px'}}></img>
                    </Col>
                  </Row>
                </Container>
                
                <p>

                

                </p>
                <h2 style={{border:"5px solid #06609f" }}>Personal Info </h2>

                <p><span style={{color:'#06609f'}}>Name :</span>  Omar Wael Saad Eldwakhly
                  <br/><span style={{color:'#06609f'}}>Address :</span>  Dar masr compound, El Obour City, Qaluibia, Egypt
                  <br/><span style={{color:'#06609f'}}>Military Status :</span>  Exempted
                  <Container >
                  <Row>
                    <Col size ={4}> <span style={{color:'#06609f'}}>Phone :</span>  01154615235  </Col>
                    <Col size ={4}> <span style={{color:'#06609f'}}>Location :</span>  Egypt</Col>
                    <Col size ={4}> <span style={{color:'#06609f'}}>Age :</span>  23  </Col>
                  </Row>
                  </Container>

                  
    

                </p>
   


              
                <h2 style={{border:"5px solid #06609f" }}>Education</h2>
                <p>
                <ul>

                  <li style={{marginTop:"10px"}}> Bachelor’s degree of Electrical Computer Engineering, Ain Shams University, Faculty of Engineering, Cairo <br/> GPA: Very Good </li>
                  <li style={{marginTop:"10px"}}> Scholarship program in Information Technology Institute (ITI) in Enterprise & Web applications Development (JAVA) track 9 months scholarship program intake 44.</li>

                </ul>
                </p>
               <h2 style={{border:"5px solid #06609f" }}>Courses</h2>
                <p>
                <ul>
                  <li style={{marginTop:"2px"}}> IBM Software web developer verified from IBM SkillsBuild Web Development Fundamentals Certificate Verify: <a href="https://www.credly.com/badges/38c74361-4490-4a76-9bcc-75580606ec39/public_url">Credential link</a></li>
                  <li style={{marginTop:"10px"}}> FULL STACK DEVELOPER PHP Stack CERTIFICATE BY (AMIT in NasrCity)</li>
                  <li style={{marginTop:"10px"}}> Summer training course with ITIDA and National telecommunication institute  in 2021 for 4 weeks (120 hours) in Artificial Intelligence field</li>
                  <li style={{marginTop:"10px"}}> FULL STACK DEVELOPER PHP Stack CERTIFICATE BY (AMIT in NasrCity)</li>
                  <li style={{marginTop:"10px"}}> AI Deep learning specialization course by Dr andrew (Coursera)</li>
                  <li style={{marginTop:"10px"}}> Passing Microsoft Azure AI Fundamentals AI-900 exam <a href="https://www.credly.com/badges/071c9817-72b6-4709-848a-875689e6b69a/public_url">Credential link</a></li>
                </ul>
                </p>
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
