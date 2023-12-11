import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ContactUs.css'
const ContactUs = () => {
    return (
        <Container className=' px-5 mb-5 pb-5'>

            <div className=' my-5 py-5'>
                <h1 style={{ fontFamily: "battambang" }} className='text-center  fw-bold text-white'>Embark on Your Success Journey</h1>
                <article style={{ fontSize: "14px" }} className=' text-white text-center '>Reach Out to Our Experts</article>
            </div>


            <div className=' my-5 py-5'></div>

            <form>
                {/* Name========= */}
                <div className='mb-5 d-flex flex-column justify-content-between align-items-start'>
                    <label className='text-white mb-4 label fw-bold fs-3'>
                        Name
                    </label>
                    <Row className=' w-100 d-flex  justify-content-between align-items-center pe-0'>
                        <Col md={6} className=' pe-0 pe-md-5 pe-lg-5 pe-xl-5 pe-xxl-5'>
                            <input type="text" className='input text-white w-100 mb-2 bg-black' />
                            <p className=' text-white'>First</p>
                        </Col>

                        <Col md={6} className='pe-0 ps-md-0 ps-md-5 ps-lg-5 ps-xl-5 ps-xxl-5'>
                            <input type="text" className='input text-white w-100 mb-2 bg-black' />
                            <p className=' text-white'>Last</p>
                        </Col>
                    </Row>
                </div>



                {/* Email========= */}
                <div className='mb-5 d-flex flex-column justify-content-between align-items-start'>
                    <label className='text-white mb-4 label fw-bold fs-3'>
                        Email
                    </label>
                    <input type="text" className='input text-white w-100 bg-black ' />
                </div>

                {/* Phone NUmber==== */}
                <div className='mb-5 d-flex flex-column justify-content-between align-items-start'>
                    <label className='text-white mb-4 label fw-bold fs-3'>
                        Phone Number
                    </label>
                    <input type="text" className='input text-white w-100 bg-black ' />
                </div>

                {/* Website========== */}
                <div className='mb-5 d-flex flex-column justify-content-between align-items-start'>
                    <label className='text-white mb-4 label fw-bold fs-3'>
                        Website
                    </label>
                    <input type="text" className='input text-white w-100 bg-black ' />
                </div>


                {/* Budget=============== */}
                <div className='mb-5 d-flex flex-column justify-content-between align-items-start'>
                    <label className='text-white mb-4 label fw-bold fs-3'>
                        Budget
                    </label>
                    <input type="text" className='input text-white w-100 bg-black ' />
                </div>


                {/* Message============= */}
                <div className='mb-5 d-flex flex-column justify-content-between align-items-start'>
                    <label className='text-white mb-4 label fw-bold fs-3'>
                        Message
                    </label>
                    <input type="text" className='input text-white w-100 bg-black'/>
                </div>

                <div className=' my-5 py-5 '></div>
                <div className=' d-flex justify-content-center align-items-center  '>
                    <button style={{ background: "#7D26CD" }} className="mb-5 px-5 py-3 rounded-4 border-0 text-white fw-semibold">Submit</button>
                </div>

            </form>

            <div className=' mb-5  pb-5'></div>
        </Container>
    );
};

export default ContactUs;