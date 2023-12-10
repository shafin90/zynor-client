import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './CustomNavbar.css'
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
    return (
        <Navbar className=' py-5 ' expand="lg">
            <Container>
                {/* Left side - Logo */}
                <Navbar.Brand className='text-white d-flex justify-content-between align-items-center' href="#home">
                    <img src="/assets/logo.png" className='logo' alt="" />
                    <span className='brand'>ZYNORE</span>
                </Navbar.Brand>

                {/* Center - Menu */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link style={{ fontFamily: "Nunito" }} as={Link} to="/" className='text-white' >Home</Nav.Link>

                        <Nav.Link style={{ fontFamily: "Nunito" }} as={Link} to="/services" className=' text-white' >Our Service</Nav.Link>

                        <Nav.Link style={{ fontFamily: "Nunito" }} as={Link} to="/ourWork" className=' text-white'>Our Works</Nav.Link>

                        <Nav.Link style={{ fontFamily: "Nunito" }} as={Link} to="/ourBlog" className='text-white'>Our Blog</Nav.Link>

                        <Nav.Link style={{ fontFamily: "Nunito" }} className=' text-white' href="#content">Our Content</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                {/* Right side - Button */}
                <button style={{ fontFamily: "Nunito" }} className='btn-pink text-white border-0 px-4 py-3 rounded-4 fw-bold'>We Are Hiring</button>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
