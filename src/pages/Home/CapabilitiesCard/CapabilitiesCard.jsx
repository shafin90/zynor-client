
const CapabilitiesCard = ({img, heading}) => {
    return (
        <div style={{background:"#272727"}} 
        className="rounded-4 position-relative  d-flex flex-column justify-content-center align-items-center pb-4">
            <img className=" position-absolute top-0 img-fluid z-0" src="/assets/Rectangle 36.png" alt="" />
            <img src={img} className=" w-50 p-3 z-1 mb-5" alt="" />
            <h3 
            className={heading==="SEO" || heading==="Google Ads"?"text-brown fw-semibold mt-5 mb-5 px-5 mt-3 mx-4 text-center":"text-brown fw-semibold mt-3 mb-5 px-5 mx-4 text-center"}             
            >{heading}</h3>

        </div>
    );
};

export default CapabilitiesCard;