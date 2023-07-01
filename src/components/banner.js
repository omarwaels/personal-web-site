import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import header from "../assets/img/header-img.svg"
function Banner (){
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}  >
                        <span className="tagline">Welcome to my Portofolio </span>
                        <h1>{`Hi! I'm omar Web Developer`}</h1>
                        <p>Backend & AI Developer</p>
                        <button onClick={() => console.log('connect')} style={{cursor: 'default'}}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}  >
                        <img src={header} alt="header"/> 
                    </Col>

                </Row>
            </Container>

        </section>


    );
}
export default Banner ;