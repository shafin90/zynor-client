import React from 'react';
import OurBlogCard from './OurBlogCard/OurBlogCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurBlog = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <Container className='my-5 py-5'>
            <Row className=' mb-5 '>
                <Col data-aos='fade-up'  data-aos-duration='1500' md={4} className='mb-5 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                    <OurBlogCard
                        heading='Set Free the Power of Digital Marketing'
                        article='Your Gateway to Online Success'
                        img="/assets/Rectangle 13.jpg"
                        numberOfBlog={1}
                    ></OurBlogCard>
                </Col>

                <Col data-aos='fade-up'  data-aos-duration='1500' md={4} className='mb-5 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                    <OurBlogCard
                        heading='Social Media Marketing'
                        article='Building Your Brand Online'
                        img="/assets/Rectangle 12.jpg"
                        numberOfBlog={2}
                    ></OurBlogCard>
                </Col>

                <Col data-aos='fade-up'  data-aos-duration='1500' md={4} className='mb-5 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                    <OurBlogCard
                        heading='Email Marketing'
                        article='Building and Nurturing Your Online Community'
                        img="/assets/Rectangle 14.jpg"
                        numberOfBlog={3}
                    ></OurBlogCard>
                </Col>
            </Row>


            <Row className=' mb-5 '>
                <Col data-aos='fade-up'  data-aos-duration='1500' md={4} className='mb-5 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                    <OurBlogCard
                        heading='Content Marketing Mastery'
                        article='Creating Value that Drives Results'
                        img="/assets/Rectangle 16.jpg"
                        numberOfBlog={4}
                    ></OurBlogCard>
                </Col>

                <Col data-aos='fade-up'  data-aos-duration='1500' md={4} className='mb-5 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                    <OurBlogCard
                        heading='Evolving Customer Experience'
                        article='Personalization and Engagement in the Digital Age'
                        img="/assets/Rectangle 15.jpg"
                        numberOfBlog={5}
                    ></OurBlogCard>
                </Col>

                <Col data-aos='fade-up'  data-aos-duration='1500' md={4} className='mb-5 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                    <OurBlogCard
                        heading='How to Create a Killer SEO Strategy'
                        article='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor malesuada sem ultricies tristique.'
                        img="/assets/Rectangle 17.jpg"
                        numberOfBlog={6}
                    ></OurBlogCard>
                </Col>
            </Row>



            <Row className=' mb-5 '>
                <Col data-aos='fade-up'  data-aos-duration='1500' md={4} className='mb-5 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                    <OurBlogCard
                        heading='Navigating the Social Media Landscape'
                        article='A Digital Marketing Guide'
                        img="/assets/Rectangle 13 (1).jpg"
                        numberOfBlog={7}
                    ></OurBlogCard>
                </Col>

                <Col data-aos='fade-up'  data-aos-duration='1500' md={4} className='mb-5 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                    <OurBlogCard
                        heading='Embracing Micro-Influencers'
                        article='Leveraging Authenticity and Niche Communities for Targeted Marketing'
                        img="/assets/Rectangle 12 (1).jpg"
                        numberOfBlog={8}
                    ></OurBlogCard>
                </Col>

                <Col data-aos='fade-up'  data-aos-duration='1500' md={4} className='mb-5 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0'>
                    <OurBlogCard
                        heading='The Future is Exciting'
                        article='Embracing the Evolution of Digital Marketing'
                        img="/assets/Rectangle 14 (1).jpg"
                        numberOfBlog={9}
                    ></OurBlogCard>
                </Col>
            </Row>

            <div className=' my-5 py-5'></div>

            <div data-aos='zoom-up-down'  data-aos-duration='1500' className=' d-flex flex-column justify-content-between align-items-center my-5 py-5   px-0 px-md-5 px-lg-5 px-xl-5 px-xxl-5'>
                <h1 style={{ fontFamily: "battambang" }} className='text-white text-center mb-3 fw-bold'>
                    Lorem ipsum dolor sit amet
                </h1>
                <article className='text-white text-center mb-5 px-0 px-md-5 px-lg-5 px-xl-5 px-xxl-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor malesuada sem ultricies tristique. In eu augue at lorem mattis semper. Fusce dignissim urna a pretium euismod.
                </article>

                <button className="get-in-touch px-5 py-3 rounded-4 text-white fw-semibold">Get in Touch</button>
            </div>
        </Container>
    );
};

export default OurBlog;