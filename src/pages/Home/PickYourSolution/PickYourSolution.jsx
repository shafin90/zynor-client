import { Container, Row, Col } from "react-bootstrap"
import SolutionCard from "../SolutionCard/SolutionCard";

const PickYourSolution = () => {
    return (
        <Container className=" my-5 py-5 ">
            <h1 className=" h2 text-center text-pink fw-semibold  mt-5 mb-3">Pick Your Solutions </h1>

            <Row className=" d-flex justify-content-between align-items-center pt-5" >
                <Col className=" px-3 mb-5 mb-md-0 mb-xl-0 mb-xxl-0 " md={4}>

                    <div style={{ background: "#272727" }} className=" py-5 rounded-4 mb-4">
                        <h2 style={{ background: "#C19732", fontFamily:"Nunito" }} className="fw-bold fs-3 py-3 text-white fw-semibold text-center mb-4 ">Revenue Generation</h2>

                        <div className=" px-4">
                            <SolutionCard
                                heading="Search Engine Optimization (SEO)"
                                opt1="Keyword research and optimization"
                                opt2="On-page and off-page SEO"
                                opt3="SEO-driven content creation"
                            ></SolutionCard>

                            <SolutionCard
                                heading="Search Engine Optimization (SEO)"
                                opt1="Keyword research and optimization"
                                opt2="On-page and off-page SEO"
                                opt3="SEO-driven content creation"
                            ></SolutionCard>

                            <SolutionCard
                                heading="Search Engine Optimization (SEO)"
                                opt1="Keyword research and optimization"
                                opt2="On-page and off-page SEO"
                                opt3="SEO-driven content creation"
                            ></SolutionCard>
                        </div>
                    </div>


                    <button style={{ border: "1px solid #C19732", background: "#272727", boxShadow: "0px 4px 40px 20px #C1973233" }} className="px-5 py-3 rounded-4 text-white fw-semibold">Get Quote</button>
                </Col>

                <Col className=" px-3 mb-5 mb-md-0 mb-xl-0 mb-xxl-0 " md={4}>
                    <div style={{ background: "#272727" }} className=" py-5 rounded-4 mb-4">
                        <h2 style={{ background: "#C19732", fontFamily:"Nunito"  }} className="fw-bold fs-3 py-3 text-white fw-semibold text-center mb-4 ">Lead Generation</h2>

                        <div className=" px-4">
                            <SolutionCard
                                heading="Search Engine Optimization (SEO)"
                                opt1="Keyword research and optimization"
                                opt2="On-page and off-page SEO"
                                opt3="SEO-driven content creation"
                            ></SolutionCard>

                            <SolutionCard
                                heading="Search Engine Optimization (SEO)"
                                opt1="Keyword research and optimization"
                                opt2="On-page and off-page SEO"
                                opt3="SEO-driven content creation"
                            ></SolutionCard>

                            <SolutionCard
                                heading="Search Engine Optimization (SEO)"
                                opt1="Keyword research and optimization"
                                opt2="On-page and off-page SEO"
                                opt3="SEO-driven content creation"
                            ></SolutionCard>
                        </div>
                    </div>

                    <button style={{ border: "1px solid #C19732", background: "#272727", boxShadow: "0px 4px 40px 20px #C1973233" }} className="px-5 py-3 rounded-4 text-white fw-semibold">Get Quote</button>
                </Col>

                <Col className=" px-3 mb-5 mb-md-0 mb-xl-0 mb-xxl-0 " md={4}>
                    <div style={{ background: "#272727" }} className=" py-5 rounded-4 mb-4">
                        <h2 style={{ background: "#C19732", fontFamily:"Nunito"  }} className="fw-bold fs-3 py-3 text-white fw-semibold text-center mb-4 ">Brand Building</h2>

                        <div className="px-4">
                            <SolutionCard
                                heading="Search Engine Optimization (SEO)"
                                opt1="Keyword research and optimization"
                                opt2="On-page and off-page SEO"
                                opt3="SEO-driven content creation"
                            ></SolutionCard>

                            <SolutionCard
                                heading="Search Engine Optimization (SEO)"
                                opt1="Keyword research and optimization"
                                opt2="On-page and off-page SEO"
                                opt3="SEO-driven content creation"
                            ></SolutionCard>

                            <SolutionCard
                                heading="Search Engine Optimization (SEO)"
                                opt1="Keyword research and optimization"
                                opt2="On-page and off-page SEO"
                                opt3="SEO-driven content creation"
                            ></SolutionCard>
                        </div>
                    </div>
                    <button style={{ border: "1px solid #C19732", background: "#272727", boxShadow: "0px 4px 40px 20px #C1973233" }} className="px-5 py-3 rounded-4 text-white fw-semibold">Get Quote</button>
                </Col>

            </Row>
        </Container>
    );
};

export default PickYourSolution;