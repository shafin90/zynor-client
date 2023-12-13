import { Container, Row, Col } from "react-bootstrap";
import CapabilitiesCard from "../CapabilitiesCard/CapabilitiesCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './OurCapabilites.css'


const OurCapabilities = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Container className=" d-flex flex-column justify-content-between align-items-center my-5  py-5">
            <h3 data-aos='fade-right' data-aos-duration='1000' style={{ color: "#7D26CD", fontFamily: "battambang" }} className=" fw-semibold text-center my-5 pb-3">Our Capabilities</h3>

            <Row>
                <Col data-aos='fade-up' data-aos-duration='1000' md={6} xl={4} className=" p-2 ">
                    <CapabilitiesCard
                        img="/assets/1 2.png"
                        heading="SEO"
                    ></CapabilitiesCard>
                </Col>

                <Col data-aos='fade-up' data-aos-duration='1000' md={6} xl={4} className=" p-2 ">
                    <CapabilitiesCard
                        img="/assets/2 1.png"
                        heading="Social Media Marketing"
                    ></CapabilitiesCard>
                </Col>

                <Col data-aos='fade-up' data-aos-duration='1000' md={6} xl={4} className=" p-2 ">
                    <CapabilitiesCard
                        img="/assets/3.png"
                        heading="Email Marketing"
                    ></CapabilitiesCard>
                </Col>
            </Row>


            <Row className=" mb-5  pb-5">
                <Col data-aos='fade-up' data-aos-duration='1000' md={6} xl={4} className=" p-2 ">
                    <CapabilitiesCard
                        img="/assets/4 (1).png"
                        heading="Content Marketing"
                    ></CapabilitiesCard>
                </Col>

                <Col data-aos='fade-up' data-aos-duration='1000' md={6} xl={4} className=" p-2 ">
                    <CapabilitiesCard
                        img="/assets/5.png"
                        heading="Google Ads"
                    ></CapabilitiesCard>
                </Col>

                <Col data-aos='fade-up' data-aos-duration='1000' md={6} xl={4} className=" p-2 ">
                    <CapabilitiesCard
                        img="/assets/6.png"
                        heading="Analytics & Reports"
                    ></CapabilitiesCard>
                </Col>
            </Row>

            <button data-aos='fade-up' data-aos-duration='1000' className=" mx-auto px-5 py-3 rounded-4 text-white fw-bolder seeOurCapabilitiesButton">View All</button>

        </Container>
    );
};

export default OurCapabilities;
