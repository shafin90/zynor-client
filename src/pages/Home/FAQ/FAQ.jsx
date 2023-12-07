import { Container } from "react-bootstrap"
import FAQCard from "../FAQCard/FAQCard";

const FAQ = () => {
    return (
        <Container className=" my-5 py-5">
            <h1 className=" fw-semibold text-pink text-center mb-5">FAQ</h1>

            <FAQCard
                question="How can we start working with you?"
                answer="Starting is simple. Just reach out to us through our contact form or give us a call. Our team will schedule a consultation to understand your needs and discuss how we can help transform your digital presence in the healthcare sector."
            ></FAQCard>


            <FAQCard
            question="What is your pricing model for digital marketing services?"
            answer="Our pricing is as bespoke as our services. We offer various packages ranging from basic digital presence setups to comprehensive marketing strategies, along with custom solutions tailored to specific needs. Our pricing is transparent and competitive, reflecting the high value and bespoke nature of our services."
            ></FAQCard>


            <FAQCard
            question="What is your process for tracking and reporting the progress of campaigns?"
            answer="We believe in transparency and accountability. Our clients receive regular, detailed reports that include key performance metrics, insights, and strategic adjustments. This ensures our clients are always informed and can see the tangible results of our efforts."
            ></FAQCard>


            <FAQCard
            question="How do you ensure the quality and effectiveness of your services?"
            answer="Our commitment to quality is unwavering. We employ industry-leading tools and techniques, combined with our deep understanding of the healthcare market, to deliver measurable results. Our team of experts continuously monitors and optimizes our campaigns to ensure maximum effectiveness and client satisfaction."
            ></FAQCard>
        </Container>
    );
};

export default FAQ;