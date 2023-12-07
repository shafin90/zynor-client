import { Container, Row, Col } from "react-bootstrap";
import CapabilitiesCard from "../CapabilitiesCard/CapabilitiesCard";

const OurCapabilities = () => {
    return (
        <Container className=" d-flex flex-column justify-content-between align-items-center my-5  py-5">
            <h3 style={{ color: "#7D26CD", fontFamily: "battambang" }} className=" fw-semibold text-center my-5 pb-3">Our Capabilities</h3>

            <Row>
                <Col md={4} className=" p-2 ">
                    <CapabilitiesCard
                        img="../../../../public/assets/1 2.png"
                        heading="SEO"
                    ></CapabilitiesCard>
                </Col>

                <Col md={4} className=" p-2 ">
                    <CapabilitiesCard
                        img="../../../../public/assets/2 1.png"
                        heading="Social Media Marketing"
                    ></CapabilitiesCard>
                </Col>

                <Col md={4} className=" p-2 ">
                    <CapabilitiesCard
                        img="../../../../public/assets/3.png"
                        heading="Email Marketing"
                    ></CapabilitiesCard>
                </Col>
            </Row>


            <Row className=" mb-5  pb-5">
                <Col md={4} className=" p-2 ">
                    <CapabilitiesCard
                        img="../../../../public/assets/4 (1).png"
                        heading="Content Marketing"
                    ></CapabilitiesCard>
                </Col>

                <Col md={4} className=" p-2 ">
                    <CapabilitiesCard
                        img="../../../../public/assets/5.png"
                        heading="Google Ads"
                    ></CapabilitiesCard>
                </Col>

                <Col md={4} className=" p-2 ">
                    <CapabilitiesCard
                        img="../../../../public/assets/6.png"
                        heading="Analytics & Reports"
                    ></CapabilitiesCard>
                </Col>
            </Row>

            <button style={{ border: "1px solid #7D26CD", background: "#272727", boxShadow: "0px 4px 20px 10px #7D26CD33" }} className=" mx-auto px-5 py-3 rounded-4 text-white fw-bolder">View All</button>

        </Container>
    );
};

export default OurCapabilities;