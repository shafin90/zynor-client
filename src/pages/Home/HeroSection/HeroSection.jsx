import { Container } from "react-bootstrap"
import './HeroSection.css'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const HeroSection = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <Container  className=" my-5  py-5 d-flex flex-column justify-content-between align-items-center">
            <h1 data-aos='fade-up'  data-aos-duration='2000' className=" text-pink text-center fw-semibold mb-4 px-0 px-md-5 px-lg-5 px-xl-0 px-xxl-0">
                We're not the Digital Marketing Experts You Want But the ones you Need
            </h1>
            <article data-aos='fade-up'  data-aos-duration='2000' style={{fontFamily:"Nunito"}} className=" text-white text-center px-5 fs-5 mb-5 pb-5">
                At Zynore, we are the digital marketing experts you need to help your business grow online. <br />
                We have a proven track record of helping businesses of all sizes achieve their digital marketing goals.
            </article>

            <button data-aos='fade-up'  data-aos-duration='2000' className="get-in-touch px-5 py-3 rounded-4 text-white fw-semibold">Get in Touch</button>
        </Container>
    );
};

export default HeroSection;