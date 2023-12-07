
const SolutionCard = ({ heading, opt1, opt2, opt3 }) => {
    return (
        <div style={{ background: "#272727", borderBottom:"0.1px solid gray" }} className=" pb-2 mb-4">
            <h3  className="h6 fw-bold text-white">
                {heading}
            </h3>

            <ul>
                <li className=" text-white ">{opt1}</li>
                <li className=" text-white ">{opt2}</li>
                <li className=" text-white ">{opt3}</li>
            </ul>
        </div>
    );
};

export default SolutionCard;