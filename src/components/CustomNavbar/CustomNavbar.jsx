import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './CustomNavbar.css'
import { Link, useLocation } from 'react-router-dom';

const CustomNavbar = () => {
    const { pathname } = useLocation();
    console.log(pathname)
    return (
        <Navbar className=' py-5 ' expand="lg">
            <Container>
                {/* Left side - Logo */}
                <Navbar.Brand className='text-white d-flex justify-content-between align-items-center' href="#home">
                    <img src="/assets/logo.png" className='logo' alt="" />
                    <span className='brand'>ZYNORE</span>
                </Navbar.Brand>

                {/* Center - Menu */}
                <Navbar.Toggle style={{backgroundColor:"#7D26CD"}} className=' mx-5' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link
                            style={{ fontFamily: "Nunito", color: `${pathname === "/" ? "#7D26CD" : "white"}` }}
                            as={Link} to="/"
                        >Home
                        </Nav.Link>

                        <Nav.Link
                            style={{ fontFamily: "Nunito", color: `${pathname === "/services" ? "#7D26CD" : "white"}` }}
                            as={Link} to="/services"
                        >Our Service</Nav.Link>

                        <Nav.Link
                            style={{ fontFamily: "Nunito", color: `${pathname === "/ourWork" ? "#7D26CD" : "white"}` }}
                            as={Link}
                            to="/ourWork"
                        >Our Works</Nav.Link>

                        <Nav.Link
                            style={{ fontFamily: "Nunito", color: `${pathname === "/ourBlog" ? "#7D26CD" : "white"}` }}
                            as={Link}
                            to="/ourBlog"
                        >Our Blog</Nav.Link>

                        <Nav.Link
                            style={{ fontFamily: "Nunito", color:`${pathname === "/contactUs" ? "#7D26CD" : "white"}` }}
                            as={Link}
                            to="/contactUs"
                        >Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                {/* Right side - Button */}
                <button style={{ fontFamily: "Nunito" }} className='btn-pink text-white border-0 px-4 py-3 rounded-4 fw-bold'>We Are Hiring</button>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
