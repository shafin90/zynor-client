import { Button, Card, Container } from "react-bootstrap"
import FindWorkCard from "../FindWorkCard/FindWorkCard";

const FindYourWork = () => {
    return (
        <Container className=" my-5 py-5" fluid>
            <h1 className=" h2 text-center text-pink fw-semibold pt-5 my-5">Find Our Work</h1>

            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}
            <div className="position-relative  w-100 ps-0 ps-md-5 ps-lg-5 ps-xl-5 ps-xxl-5 ms-0 ms-md-5 ms-lg-5 ms-xl-5 ms-xxl-5">
                <div style={{ width: "99rem" }} className=" position-relative d-flex justify-content-between align-items-center">

                    <FindWorkCard
                        img="../../../../public/assets/Rectangle 18.jpg"
                        title="Revitalizing Rajesh Hospital's Online Presence"
                        article="Revamped their website with a patient-friendly interface, implemented an SEO and content marketing strategy."
                    ></FindWorkCard>

                    <FindWorkCard
                        img="../../../../public/assets/Mask group.jpg"
                        title="Social Media Surge for Shakti Clinics"
                        article="We crafted a targeted social media campaign focusing on health awareness and preventive care."
                    ></FindWorkCard>

                    <FindWorkCard
                        img="../../../../public/assets/Mask group.jpg"
                        title="Social Media Surge for Shakti Clinics"
                        article="We crafted a targeted social media campaign focusing on health awareness and preventive care."
                    ></FindWorkCard>


                </div>

            </div>
        </Container>
    );
};

export default FindYourWork;