import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import  ProjectCard  from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";

import TrackVisibility from 'react-on-screen';

export const Projects = () => {
let projectInfo1 = "In this project, we will be building a web e-commerce platform that harnesses the power of AI to provide the best possible user experience. The platform will be equipped with AI services such as recommendation and sentiment analysis, and chatbot to help users make informed choices about their purchases.The recommendation system will use machine learning algorithms to analyze customer purchase history and browsing behavior, and suggest products that are best suited to their preferences. Sentiment analysis, on the other hand, will analyze user reviews and feedback, and provide insights to help improve the overall user experience. The chatbot will be powered by Natural Language Processing (NLP) and machine learning algorithms, enabling it to understand user queries and respond accordingly. It will also be able to provide personalized product recommendations and assist with transactional tasks such as payment and order tracking. With this innovative project, we hope to provide a seamless and personalized shopping experience for users, while also leveraging the power of AI to drive business growth. and all these services was connected with front end and back end by Microsoft Azure Services My role was to build recommendation system services to website and deploy all the services on Azure " ;
let projectInfo3 = "Road segmentation is a task in computer vision that involves identifying and locating roads within an image or video" 
+"feed. This can be a crucial component of various applications, such as autonomous vehicles and traffic monitoring systems." 
+"A typical road segmentation project involves collecting training data, selecting an appropriate segmentation technique, and developing" 
+"and evaluating a segmentation model. Some popular segmentation techniques include semantic segmentation, instance segmentation," 
+"and edge detection. Deep learning techniques, such as convolutional neural networks  ";

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
                      <Nav.Link eventKey="second">Road segementation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>

                              <ProjectCard
                                name='Road Segmentaion Project' imgArr={['Website Home page.gif','Products.gif']} projectInfo={projectInfo1} projlink='https://marketplaceangular.azurewebsites.net/home'/>

                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    <Row>
                              <ProjectCard
                                name='Ecommerce Project "Graduation Proj"' imgArr={['CarDetection.gif','LaneDetection.gif']} projectInfo={projectInfo3} projlink='https://github.com/omarwaels/image_project.git'/>
                                </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                              <p><ul>
                                <li>
                                using Java script vanilla to build website for making notes (CRUD OP using JS , HTML , CSS , BOOTSTRAP)
                                </li>
                                <li>
                                Designed Classification program game (Cat or Dog) using Deep Learning concepts
                                </li>
                                <li>
                                Constructed XML file operations (to check errors) using C++ programing language
                                </li>
                                </ul></p>
                                </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
