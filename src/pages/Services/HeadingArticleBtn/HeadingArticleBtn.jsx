import { Container } from "react-bootstrap";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeadingArticleBtn = ({ heading, article, btnText }) => {
    
    useEffect(()=>{
        AOS.init();
    },[])
    
    return (
        <Container data-aos="zoom-out-up"  data-aos-duration='1000' className="d-flex flex-column justify-content-between align-items-center my-5 py-5">
            <h1 style={{fontFamily:"battambang"}} className=" h2 fw-semibold mb-4 text-white text-center ">
                {heading}
            </h1>
            <article style={{fontFamily:"battambang", fontSize:"15px"}} className=" px-5 text-white mb-5 text-center">
                {article}
            </article>


            <button style={{ border: "1px solid #C19732", background: "#272727", boxShadow: "0px 4px 40px 20px #C1973233" }} className="px-5 py-3 rounded-4 text-white fw-semibold">{btnText}</button>
        </Container>
    );
};

export default HeadingArticleBtn;