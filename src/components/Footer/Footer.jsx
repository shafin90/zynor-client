import { Container, Row, Col } from "react-bootstrap"
import './Footer.css'
import { useNavigate } from "react-router-dom";

const Footer = () => {
    
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigate("/contactUs")
    }
    
    return (
        <Container style={{ background: "#272727", boxShadow: "0px 4px 20px 10px #3b3338" }} className="rounded-top-5 d-flex flex-column justify-content-between align-items-center mt-5 py-5" fluid >
            <h1 className="text-center text-brown fw-semibold my-3 footer-heading">
                Let’s make something
                great together
            </h1>

            <p className=" text-center text-white fw-semibold mb-5">
                Ready to redefine your journey?
            </p>
            <button onClick={handleNavigate} className=" footerBtn mb-5 px-5 py-3 rounded-4 border-0 text-white fw-semibold">Contact Us</button>


            <Container className=" my-5">

                <Row className=" d-flex justify-content-between align-items-start">
                    <Col md={5}>
                        <h5 className=" mb-4 text-white">Address</h5>
                        <article className="mb-4 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor malesuada sem ultricies tristique. In eu augue at lorem mattis semper. Fusce dignissim urna a pretium euismod.
                        </article>
                    </Col>
                    <Col md={5}>
                        <h5 className=" mb-4 text-white">Contact Us</h5>
                    </Col>
                </Row>


                <Row className=" d-flex justify-content-between align-items-start">
                    <Col md={5}>
                        <article className=" text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor malesuada sem ultricies tristique. In eu augue at lorem mattis semper. Fusce dignissim urna a pretium euismod.
                        </article>
                    </Col>

                    <Col md={5}>
                        <h5 className=" mb-4 text-white">Address</h5>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;