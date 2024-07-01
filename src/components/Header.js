import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div id='header' className='px-lg-5 mb-4 bg-dark border-bottom border-body shadow' data-bs-theme="dark">
            <Navbar expand="lg" className='shadow-lg'>
                <Container fluid className='py-3'>
                    <Navbar.Brand href="/">
                        <b>Jojo Faborada</b> - <small className='poppins-light'>BSIT</small>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-none' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-lg-auto ms-lg-4 text-center gap-lg-3'>
                            <Nav.Link as={NavLink} to="/" exact className='poppins-semibold text-hover-info' activeClassName='active'>
                            Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className='poppins-semibold text-hover-info' activeClassName='active'>
                            About
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/offer" className='poppins-semibold text-hover-info' activeClassName='active'>
                            Services
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/experience" className='poppins-semibold text-hover-info' activeClassName='active'>
                            Experience
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className='a btn shadow-lg text-hover-info poppins-bold' activeClassName='active'>
                            Contact Me
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
  }
  
  export default Header;
