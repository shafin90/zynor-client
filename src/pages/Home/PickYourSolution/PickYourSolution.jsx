import { Container, Row, Col } from "react-bootstrap"
import SolutionCard from "../SolutionCard/SolutionCard";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PickYourSolution = () => {

    useEffect(()=>{
        AOS.init();
    },[])

    return (
        <Container className=" my-5 py-5 ">
            <h1  data-aos='fade-right'  data-aos-duration='2000' className=" h2 text-center text-pink fw-semibold  mt-5 mb-3">Pick Your Solutions </h1>

            <Row className=" d-flex justify-content-between align-items-center pt-5" >
                <Col className=" px-3 mb-5 mb-md-0 mb-xl-0 mb-xxl-0 " xl={4} md={6}>

                    <div data-aos='zoom-in-down' data-aos-duration='2000' style={{ background: "#272727" }} className=" py-5 rounded-4 mb-4">
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
                    <button data-aos='fade-up'  data-aos-duration='1000' 
                    style={{ 
                        border: "1px solid #C19732", 
                        background: "#272727", 
                        boxShadow: "0px 4px 40px 20px #C1973233" ,
                        animationName:"lighting",
                        animationDuration:'2s',
                        animationIterationCount:"infinite"
                        }} className="px-5 py-3 rounded-4 text-white fw-semibold">Get Quote</button>
                </Col>

                <Col className=" px-3 mb-5 mb-md-0 mb-xl-0 mb-xxl-0 " xl={4} md={6}>
                    <div data-aos='zoom-in-down' data-aos-duration='2000' style={{ background: "#272727" }} className=" py-5 rounded-4 mb-4">
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

                    <button data-aos='fade-up'  data-aos-duration='1000' 
                    style={{ 
                        border: "1px solid #C19732", 
                        background: "#272727", 
                        boxShadow: "0px 4px 40px 20px #C1973233" ,
                        animationName:"lighting",
                        animationDuration:'2s',
                        animationIterationCount:"infinite"
                        }} className="px-5 py-3 rounded-4 text-white fw-semibold">Get Quote</button>
                </Col>

                <Col className="px-3 mb-5 mb-md-0 mb-xl-0 mb-xxl-0 mt-0  mt-sm-0 mt-md-5 mt-lg-5 mt-xl-0 mt-xxl-0" xl={4} md={6}>
                    <div data-aos='zoom-in-down' data-aos-duration='2000' style={{ background: "#272727" }} className=" py-5 rounded-4 mb-4">
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
                    <button data-aos='fade-up'  data-aos-duration='1000' 
                    style={{ 
                        border: "1px solid #C19732", 
                        background: "#272727", 
                        boxShadow: "0px 4px 40px 20px #C1973233", 
                        animationName:"lighting",
                        animationDuration:'2s',
                        animationIterationCount:"infinite"
                        }} 
                        className="px-5 py-3 rounded-4 text-white fw-semibold">Get Quote</button>
                </Col>

            </Row>
        </Container>
    );
};

export default PickYourSolution;