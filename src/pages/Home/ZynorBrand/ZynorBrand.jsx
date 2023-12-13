import { IoIosArrowDown } from "react-icons/io";
import './ZynorBrand.css'
import { useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ZynorBrand = () => {
    const { pathname } = useLocation();

    const scrollDown = () => {
        window.scroll({
            top: window.scrollY + window.innerHeight,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className={pathname === "/" ? "position-relative zynor-brand p-5 d-flex flex-column justify-content-center align-items-center" : "d-none"} >

            <div data-aos='zoom-in-down' data-aos-duration='2000' className="z-1 pt-5 pb-3  d-flex justify-content-center align-items-center">
                <img className="w-25" src="/assets/logo.png" alt="" />
                <h1 className="text-white zynor-heading mb-0" style={{ fontFamily: "battambang" }}>
                    ZYNOR
                </h1>
            </div>

            <IoIosArrowDown style={{ cursor: "pointer" }} onClick={scrollDown} className="downArrowIcon fs-2 z-1 text-white" />
            <IoIosArrowDown style={{ cursor: "pointer" }} onClick={scrollDown} className="downArrowIcon fs-2 z-1 text-white  " />
            <IoIosArrowDown style={{ cursor: "pointer" }} onClick={scrollDown} className="downArrowIcon fs-2 z-1 mb-5 text-white " />


            {/* <img  src="/assets/Desktop - 1.jpg" alt="" /> */}

            <LazyLoadImage
                src="/assets/Desktop - 1.jpg"
                className=" zynor-brand-bg position-absolute z-0"
            /> 
            {/* // use normal <img> attributes as props */}

        </div>
    );
};

export default ZynorBrand;
