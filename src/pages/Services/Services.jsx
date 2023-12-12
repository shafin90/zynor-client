import React from 'react';
import OurCapabilities from '../Home/OurCapabilities/OurCapabilities';
import { Container, Row, Col } from 'react-bootstrap';
import CapabilitiesCard from '../Home/CapabilitiesCard/CapabilitiesCard';
import PickYourSolution from '../Home/PickYourSolution/PickYourSolution';
import HeadingArticleBtn from './HeadingArticleBtn/HeadingArticleBtn';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col data-aos='fade-up' data-aos-duration='1000' md={4} className=" p-2 ">
                        <CapabilitiesCard
                            img="/assets/1 2.png"
                            heading="SEO"
                        ></CapabilitiesCard>
                    </Col>

                    <Col data-aos='fade-up' data-aos-duration='1000' md={4} className=" p-2 ">
                        <CapabilitiesCard
                            img="/assets/2 1.png"
                            heading="Social Media Marketing"
                        ></CapabilitiesCard>
                    </Col>

                    <Col data-aos='fade-up' data-aos-duration='1000' md={4} className=" p-2 ">
                        <CapabilitiesCard
                            img="/assets/3.png"
                            heading="Email Marketing"
                        ></CapabilitiesCard>
                    </Col>
                </Row>


                <Row className=" mb-1">
                    <Col data-aos='fade-up' data-aos-duration='1000' md={4} className=" p-2 ">
                        <CapabilitiesCard
                            img="/assets/4 (1).png"
                            heading="Content Marketing"
                        ></CapabilitiesCard>
                    </Col>

                    <Col data-aos='fade-up' data-aos-duration='1000' md={4} className=" p-2 ">
                        <CapabilitiesCard
                            img="/assets/5.png"
                            heading="Google Ads"
                        ></CapabilitiesCard>
                    </Col>

                    <Col data-aos='fade-up' data-aos-duration='1000' md={4} className=" p-2 ">
                        <CapabilitiesCard
                            img="/assets/6.png"
                            heading="Analytics & Reports"
                        ></CapabilitiesCard>
                    </Col>
                </Row>

                <Row className="mb-5 pb-5">
                    <Col data-aos='fade-up' data-aos-duration='1000' md={4} className=" p-2 ">
                        <CapabilitiesCard
                            img="/assets/7.png"
                            heading="Reputation Management"
                        ></CapabilitiesCard>
                    </Col>

                    <Col data-aos='fade-up' data-aos-duration='1000' md={4} className=" p-2 ">
                        <CapabilitiesCard
                            img="/assets/8.png"
                            heading="Website
                            Development"
                        ></CapabilitiesCard>
                    </Col>

                    <Col data-aos='fade-up' data-aos-duration='1000' md={4} className=" p-2 ">
                        <CapabilitiesCard
                            img="/assets/9.png"
                            heading="Video
                            Production"
                        ></CapabilitiesCard>
                    </Col>
                </Row>

                <PickYourSolution></PickYourSolution>
                <HeadingArticleBtn
                    heading="Partner with us to achieve your digital marketing goals."
                    article="we believe that every business deserves to succeed online. We'll work with you to develop a custom digital marketing plan that meets your specific needs and budget. And we'll be there every step of the way to help you implement and track your results."
                    btnText="Get in Touch"
                ></HeadingArticleBtn>
            </Container>
        </div>
    );
};

export default Services;