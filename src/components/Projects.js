import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import  ProjectCard  from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import TrackVisibility from 'react-on-screen';

export const Projects = () => {

let projectInfo3 = "Road segmentation is a task in computer vision that involves identifying and locating roads within an image or video" 
+"feed. This can be a crucial component of various applications, such as autonomous vehicles and traffic monitoring systems." 
+"A typical road segmentation project involves collecting training data, selecting an appropriate segmentation technique, and developing" 
+"and evaluating a segmentation model. Some popular segmentation techniques include semantic segmentation, instance segmentation," 
+"and edge detection. Deep learning techniques, such as convolutional neural networks  "

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>When collaborating on projects, I always strive to make my work as transparent and accessible as possible. I usually begin by breaking down a project into its key components and defining the specific role that I will play in each phase of development. This helps me to identify any potential roadblocks or dependencies that may impact my work. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">E-commerce Website </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Note Web Site </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Road segementation</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>

                              <ProjectCard
                                name='Road Segmentaion Project' imgArr={['CarDetection.gif','LaneDetection.gif']} projectInfo={projectInfo3} projlink='https://github.com/omarwaels/image_project.git'/>

                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>

                                <p>Loremsssss ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>

                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                              <ProjectCard
                                name='Ecommerce Project "Graduation Proj"' imgArr={['CarDetection.gif','LaneDetection.gif']} projectInfo={projectInfo3} projlink='https://github.com/omarwaels/image_project.git'/>
                                </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
