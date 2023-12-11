import { Container } from "react-bootstrap";


const Blog1 = ({ img, heading, firstArticle, secondArticle, listFirstHeading, listFirstArticle, list1, list2, list3, list4, list5, listSecondHeading, listSecondArticle, list6, list7, list8, list9, list10, thirdArticle, thirdHeading }) => {
    return (
        <Container className="mt-5 pb-5">
            <img src={img} className="img-fluid rounded-4" alt="" />
            <h1 style={{ fontFamily: "battambang" }} className="fw-bold text-white my-5">{heading}</h1>
            <article className="my-5 text-white" >
                {firstArticle}
            </article>

            <article className={secondArticle ? "my-5 text-white" : "d-none"} >
                {secondArticle}
            </article>

            <h5 className={listFirstHeading ? "text-white my-4 " : "d-none"}>
                {listFirstHeading}
            </h5>

            <article className={listFirstArticle ? "text-white my-4" : "d-none"} >
                {listFirstArticle}
            </article>

            <ul>
                <li className={list1 ? "text-white" : "d-none"} >{list1}</li>
                <li className={list2 ? "text-white" : "d-none"} >{list2}</li>
                <li className={list3 ? "text-white" : "d-none"} >{list3}</li>
                <li className={list4 ? "text-white" : "d-none"} >{list4}</li>
                <li className={list5 ? "text-white" : "d-none"} >{list5}</li>
            </ul>

            {/* Seccond list section */}

            <h5 className={listSecondHeading ? "text-white my-4 " : "d-none"}>
                {listSecondHeading}
            </h5>

            <article className={listSecondArticle ? "text-white my-4" : "d-none"} >
                {listSecondArticle}
            </article>

            <ul>
                <li className={list6 ? "text-white" : "d-none"} >{list1}</li>
                <li className={list7 ? "text-white" : "d-none"} >{list2}</li>
                <li className={list8 ? "text-white" : "d-none"} >{list3}</li>
                <li className={list9 ? "text-white" : "d-none"} >{list4}</li>
                <li className={list10 ? "text-white" : "d-none"} >{list5}</li>
            </ul>


            <h5 className=" text-white mt-5 mb-3 ">
                {thirdHeading}
            </h5>
            <article className=" text-white">
                {thirdArticle}
            </article>
        </Container>
    );
};

export default Blog1;