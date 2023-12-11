import { Container, Row, Col } from "react-bootstrap";


const ViewProject = ({ img, firstHeading, firstArticle, SecondHeading, SecondArticle, ThirdHeading, ThirdArticle, quality }) => {
    return (
        <Container fluid className=" px-0  mb-5 pb-3">
            <img src={img} className=" img-fluid mb-5 " alt="" />
            <Container>

                <h5 style={{ fontFamily: "battambang" }} className=" h4 fw-bold text-white">{firstHeading}</h5>
                <article className=" text-white mb-5 ">
                    {firstArticle}
                </article>

                <h5 style={{ fontFamily: "battambang" }} className=" h4 fw-bold text-white">{SecondHeading}</h5>
                <article className=" text-white mb-5 ">
                    {SecondArticle}
                </article>

                <h5 style={{ fontFamily: "battambang" }} className=" h4 fw-bold text-white">{ThirdHeading}</h5>
                <article className=" text-white mb-5 ">
                    {ThirdArticle}
                </article>
            </Container>

            <Container fluid className={ quality?"px-0 bg-secondary py-5":"d-none"} >
                <Container className=" my-5">
                    <Row className=" mb-4">
                        <Col md={4}>
                            <img className="img-fluid" src="/public/assets/SHAKTI C 9 (1).jpg" alt="" />
                        </Col>
                        <Col md={4}>
                            <img className="img-fluid" src="/public/assets/SHAKTI C 1 (1).jpg" alt="" />
                        </Col>
                        <Col md={4}>
                            <img className="img-fluid" src="/public/assets/SHAKTI C 2.jpg" alt="" />
                        </Col>
                    </Row>

                    <Row className=" mb-4">
                        <Col md={4}>
                            <img className="img-fluid" src="/public/assets/SHAKTI C 3.jpg" alt="" />
                        </Col>
                        <Col md={4}>
                            <img className="img-fluid" src="/public/assets/SHAKTI C 4.jpg" alt="" />
                        </Col>
                        <Col md={4}>
                            <img className="img-fluid" src="/public/assets/SHAKTI C 5.jpg" alt="" />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <img className="img-fluid" src="/public/assets/SHAKTI C 6.jpg" alt="" />
                        </Col>
                        <Col md={4}>
                            <img className="img-fluid" src="/public/assets/SHAKTI C 7.jpg" alt="" />
                        </Col>
                        <Col md={4}>
                            <img className="img-fluid" src="/public/assets/SHAKTI C 8.jpg" alt="" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    );
};

export default ViewProject;