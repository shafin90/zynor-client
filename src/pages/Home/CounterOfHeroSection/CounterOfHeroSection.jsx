import { Container, Row, Col } from "react-bootstrap"

const CounterOfHeroSection = () => {
    return (
        <Container className=" my-5 py-5">
            <Row>
                <Col md={9} className=" rounded-4 mb-4 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
                    <img src="../../../public/assets/Video.png" className=" w-100 h-100 " alt="" />
                </Col>

                <Col md={3} className=" rounded-5 bg-dark p-5">
                    <div style={{borderBottom:"1px solid black"}} className=" pb-4 ">
                        <h2 className=" text-brown fw-semibold">
                            XXX+
                        </h2>
                        <article className=" text-white">
                            Projects Delivered
                        </article>
                    </div>


                    <div style={{borderBottom:"1px solid black"}} className="pb-4 mt-5">
                        <h2 className=" text-brown fw-semibold">
                            XXX+
                        </h2>
                        <article className=" text-white">
                            Projects Delivered
                        </article>
                    </div>


                    <div style={{borderBottom:"1px solid black"}} className=" pb-4 mt-5">
                        <h2 className=" text-brown fw-semibold">
                            XXX+
                        </h2>
                        <article className=" text-white">
                            Projects Delivered
                        </article>
                    </div>



                </Col>
            </Row>
        </Container>
    );
};

export default CounterOfHeroSection;