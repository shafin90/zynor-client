import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const OurWorkCard = ({ heading, article, img, flip, projectNumber }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/project${projectNumber}`)
    }

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Row className={flip ? "my-5 py-5 d-flex justify-content-end align-items-start" : "d-flex justify-content-start align-items-start my-5 py-5"}>
            <Col data-aos={flip ? 'fade-left' : 'fade-right'} data-aos-duration='1000' md={5} className={flip === true && "order-1 order-md-2 order-lg-2 order-xl-2 order-xxl-2 d-flex justify-content-start justify-content-md-end justify-content-lg-end justify-content-xl-end justify-content-xxl-end  align-items-center"}>
                {/* <img alt="" /> */}
                <LazyLoadImage
                    className="img-fluid mb-4 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0"
                    src={img}
                />
            </Col>

            <Col data-aos={flip ? 'fade-right' : 'fade-left'} data-aos-duration='1000' md={6} xxl={5} lg={6} className={flip === true ? "ms-0 ms-md-5 ms-lg-5 ms-xl-5 ms-xxl-5  ps-3 ps-md-3 ps-lg-3 ps-xl-3 ps-xxl-3 order-2  order-md-1 order-lg-1 order-xl-1 order-xxl-1" : "ms-0 ms-md-5 ms-lg-5 ms-xl-5 ms-xxl-5 ps-3 ps-md-3 ps-lg-3 ps-xl-3 ps-xxl-3  order-2  order-md-1 order-lg-1 order-xl-1 order-xxl-1"}   >
                <h1 style={{ fontFamily: "battambang", color: "#A878D4" }} className="mb-4 fw-bolder">{heading}</h1>
                <article className="mb-2 text-white mb-5">{article}</article>
                <button data-aos='fade-up' data-aos-duration='1500' onClick={handleNavigate} style={{ border: "1px solid #7D26CD", background: "#272727", boxShadow: "0px 4px 20px 10px #7D26CD33" }} className=" mx-auto px-5 py-3 rounded-4 text-white fw-bolder">View Project</button>
            </Col>
        </Row>
    );
};

export default OurWorkCard;