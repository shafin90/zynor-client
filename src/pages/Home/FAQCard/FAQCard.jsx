
const FAQCard = ({question, answer}) => {
    return (
        <div className=" pt-5 pb-2 mb-5" style={{borderBottom:"0.5px solid gray"}}>
            <h1 style={{fontFamily:"battambang"}} className="h4 fw-semibold text-white mb-4 ">{question}</h1>
            <article className="text-white mb-4">{answer}</article>
        </div>
    );
};

export default FAQCard;