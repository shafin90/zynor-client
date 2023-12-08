import { Container, Row, Col } from "react-bootstrap";
import OurWorkCard from "./OurWorkCard/OurWorkCard";


const OurWork = () => {
    return (
        <Container className=" my-5 py-5">
            <Row className="mb-0 pb-0 mb-md-5 pb-md-5  mb-lg-5 pb-lg-5  mb-xl-5 pb-xl-5 mb-xxl-5 pb-xxl-5">
                <Col md={9} lg={7} xl={6}>
                    <h1 style={{ fontFamily: "battambang" }} className="text-brown fw-bold display-1">
                        From Garage to Growth
                    </h1>
                </Col>

                <Col md={3} lg={5} xl={6}> </Col>
            </Row>

            <Row className=" d-flex justify-content-between align-items-center mb-0 pb-0 mb-md-5 pb-md-5  mb-lg-5 pb-lg-5  mb-xl-5 pb-xl-5 mb-xxl-5 pb-xxl-5">
                <Col md={5} lg={6} xl={6}>

                </Col>

                <Col md={7} lg={6} xl={5}>
                    <article style={{ fontFamily: "battambang" }} className="text-white fs-4">
                        Contact us today to learn more about how we can help your business grow.
                    </article>
                </Col>
            </Row>

            <div className="my-0 my-md-5 my-lg-5 my-xl-5 my-xxl-5 py-0 py-md-5 py-lg-5 py-xl-5 py-xxl-5"></div>

            <OurWorkCard
                heading="Revitalizing Rajesh Hospital's Online Presence"
                article="Our agency revamped their website with a patient-friendly interface, implemented an SEO and content marketing strategy."
                img="/assets/Image (3).png"
            ></OurWorkCard>

            <div className="my-0 my-md-5 my-lg-5 my-xl-5 my-xxl-5 py-0 py-md-5 py-lg-5 py-xl-5 py-xxl-5"></div>

            <OurWorkCard
                heading="Social Media Surge for Shakti Clinics"
                article="We crafted a targeted social media campaign focusing on health awareness and preventive care."
                img="/assets/Image (1).png"
                flip={true}
            ></OurWorkCard>

            <div className="my-0 my-md-5 my-lg-5 my-xl-5 my-xxl-5 py-0 py-md-5 py-lg-5 py-xl-5 py-xxl-5"></div>

            <OurWorkCard
                heading="SEO Success for Suraksha Health Care"
                article="A comprehensive SEO strategy was implemented, focusing on local keywords and quality content."
                img="/assets/Rectangle 2.png"
            ></OurWorkCard>

            <div className="my-0 my-md-5 my-lg-5 my-xl-5 my-xxl-5 py-0 py-md-5 py-lg-5 py-xl-5 py-xxl-5"></div>

            <OurWorkCard
                heading="Email Marketing Excellence at Ethos Eye Hospital"
                article="Developed a monthly newsletter featuring health tips, hospital news, and patient stories."
                img="/assets/Image (4).png"
                flip={true}
            ></OurWorkCard>

            <div className="my-0 my-md-5 my-lg-5 my-xl-5 my-xxl-5 py-0 py-md-5 py-lg-5 py-xl-5 py-xxl-5"></div>

            <div className=" my-5  py-5 ">
                <h1 style={{ fontFamily: "battambang" }} className="text-brown fw-bold display-4 mb-4 ">
                    Get started with our digital marketing services today and see the results for yourself.
                </h1>
                <article className="text-white fs-4">
                    We offer a comprehensive suite of digital marketing services to help businesses of all sizes achieve their online marketing goals.
                </article>
            </div>
        </Container>
    );
};

export default OurWork;