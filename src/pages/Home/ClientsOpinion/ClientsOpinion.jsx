import { Carousel, Container } from "react-bootstrap";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClientsOpinion = () => {

    useEffect(()=>{
        AOS.init();
    },[])
    
    return (
        <Container className="my-5 py-5">
            <h1 data-aos='fade-right'  data-aos-duration='1000' className="text-center text-pink h2 fw-bold my-5">What Our Clients Say</h1>

            <Carousel style={{ background: "#272727" }} className="py-5 rounded-4">
                <Carousel.Item className=" py-5">
                    <div className="text-center">
                        <h3 className="h4 text-brown fw-semibold mb-5">Transformative Digital Expertise</h3>

                    </div>
                    {/* Article in the middle */}
                    <Carousel.Caption>
                        <p className=" fw-semibold text-white"> Dr. Arjun Mehra, Director, NewLife Hospital, Mumbai </p>
                    </Carousel.Caption>
                    <div className=" mb-5 pb-5">
                        {/* Small paragraph at the bottom */}
                        <p className=" mx-auto text-center text-white w-75">"Working with Zynore was a game-changer for our hospital. Their team didn't just understand our needs; they anticipated them. The website redesign and SEO strategy they implemented have not only increased our online appointments but also elevated our brand's prestige. Their commitment to excellence is evident in every detail."</p>
                    </div>
                </Carousel.Item>

                <Carousel.Item className=" py-5">
                    <div className="text-center">
                        <h3 className="h4 text-brown fw-semibold mb-5">Transformative Digital Expertise</h3>

                    </div>
                    {/* Article in the middle */}
                    <Carousel.Caption>
                        <p className=" fw-semibold text-white"> Dr. Arjun Mehra, Director, NewLife Hospital, Mumbai </p>
                    </Carousel.Caption>
                    <div className=" mb-5 pb-5">
                        {/* Small paragraph at the bottom */}
                        <p className="mx-auto text-center text-white w-75 ">"Working with Zynore was a game-changer for our hospital. Their team didn't just understand our needs; they anticipated them. The website redesign and SEO strategy they implemented have not only increased our online appointments but also elevated our brand's prestige. Their commitment to excellence is evident in every detail."</p>
                    </div>
                </Carousel.Item>


                <Carousel.Item className=" py-5">
                    <div className="text-center">
                        <h3 className="h4 text-brown fw-semibold mb-5">Transformative Digital Expertise</h3>

                    </div>
                    {/* Article in the middle */}
                    <Carousel.Caption>
                        <p className=" fw-semibold text-white"> Dr. Arjun Mehra, Director, NewLife Hospital, Mumbai </p>
                    </Carousel.Caption>
                    <div className=" mb-5 pb-5">
                        {/* Small paragraph at the bottom */}
                        <p className=" mx-auto text-center text-white w-75">"Working with Zynore was a game-changer for our hospital. Their team didn't just understand our needs; they anticipated them. The website redesign and SEO strategy they implemented have not only increased our online appointments but also elevated our brand's prestige. Their commitment to excellence is evident in every detail."</p>
                    </div>
                </Carousel.Item>


            </Carousel>

        </Container>
    );
};

export default ClientsOpinion;
