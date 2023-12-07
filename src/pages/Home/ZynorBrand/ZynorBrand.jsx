import { IoIosArrowDown } from "react-icons/io";
import './ZynorBrand.css'

const ZynorBrand = () => {
    return (
        <div className=" position-relative zynor-brand  p-5   d-flex flex-column justify-content-center align-items-center">

            <div className="z-1 pt-5 pb-3  d-flex justify-content-center align-items-center">
                <img className="w-25" src="../../../../public/assets/logo.png" alt="" />
                <h1 className="text-white zynor-heading mb-0" style={{fontFamily:"battambang"}}>
                    ZYNOR
                </h1>
            </div>

            <IoIosArrowDown style={{cursor:"pointer"}} className="fs-2 z-1 text-white" />
            <IoIosArrowDown style={{cursor:"pointer"}} className="fs-2 z-1 text-white  " />
            <IoIosArrowDown style={{cursor:"pointer"}} className="fs-2 z-1 mb-5 text-white " />


            <img className=" zynor-brand-bg position-absolute z-0" src="../../../../public/assets/Desktop - 1.jpg" alt="" />
        </div>
    );
};

export default ZynorBrand;