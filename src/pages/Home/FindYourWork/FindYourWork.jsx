import { Button, Card, Container } from "react-bootstrap"
import FindWorkCard from "../FindWorkCard/FindWorkCard";
import { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FindYourWork.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
const FindYourWork = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX:0 ,
            },
            {
                translateX: "-300vw",
                ease: "linear",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            {/* A return function for killing the animation on component unmount */ }
            pin.kill();
        };
    }, []);


    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Container className=" my-5 py-5" fluid>
            <h1 data-aos='fade-right' data-aos-duration='1000' className=" h2 text-center text-pink fw-semibold pt-5 my-5">Find Our Work</h1>

{/* 
            <div className="position-relative w-100 overflow-x-scroll ps-0 ps-md-5 ps-lg-5 ps-xl-5 ps-xxl-5 ms-0 ms-md-5 ms-lg-5 ms-xl-5 ms-xxl-5 ourWorkContainer">
                <div data-aos='fade-up' data-aos-duration='2000' style={{ width: "132rem" }} className=" position-relative d-flex justify-content-between align-items-center mb-5"> */}
                  
                  
                  
                  
                  
                  
                  
                    <section className="scroll-section-outer">
                        <div ref={triggerRef}>
                            <div ref={sectionRef} className="scroll-section-inner">
                                <FindWorkCard
                                    img="/assets/Rectangle 18.jpg"
                                    title="Revitalizing Rajesh Hospital's Online Presence"
                                    article="Revamped their website with a patient-friendly interface, implemented an SEO and content marketing strategy."
                                ></FindWorkCard>

                                <FindWorkCard
                                    img="/assets/Mask group.jpg"
                                    title="Social Media Surge for Shakti Clinics"
                                    article="We crafted a targeted social media campaign focusing on health awareness and preventive care."
                                ></FindWorkCard>

                                <FindWorkCard
                                    img="/assets/Mask group.jpg"
                                    title="Social Media Surge for Shakti Clinics"
                                    article="We crafted a targeted social media campaign focusing on health awareness and preventive care."
                                ></FindWorkCard>

                                <FindWorkCard
                                    img="/assets/Mask group.jpg"
                                    title="Social Media Surge for Shakti Clinics"
                                    article="We crafted a targeted social media campaign focusing on health awareness and preventive care."
                                ></FindWorkCard>
                            </div>
                        </div>
                    </section>







                {/* </div>

            </div> */}
        </Container>
    );
};

export default FindYourWork;
