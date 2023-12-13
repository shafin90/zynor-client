import { LazyLoadImage } from 'react-lazy-load-image-component';
const CapabilitiesCard = ({ img, heading }) => {
    return (
        <div style={{ background: "#272727" }}
            className="rounded-4 position-relative  d-flex flex-column justify-content-center align-items-center pb-4">
            
            <LazyLoadImage
                src="/assets/Rectangle 36.png"
                className=" position-absolute top-0 img-fluid z-0"
            />
            <LazyLoadImage
                className=" w-50 p-3 z-1 mb-5"
                src={img}
            />
            <h3
                className={
                    heading === "SEO" || heading === "Google Ads"
                        ?
                        "text-brown fw-semibold mt-5 mt-md-5 mt-lg-0 mt-xl-5 mt-xxl-3 mb-5 px-5 mt-3 mx-4 text-center"
                        :
                        heading === "Social Media Marketing" ?
                            "text-brown fw-semibold mt-5 mt-md-5 mt-lg-0 mt-xl-5 mt-xxl-3 mb-5 mb-md-3 mb-lg-3 mb-xl-3 mb-xxl-3 px-5 mt-3 mx-4 text-center"
                            :
                            "text-brown fw-semibold mt-3 mb-5 px-5 mx-4 text-center"}
            >{heading}</h3>

        </div>
    );
};

export default CapabilitiesCard;