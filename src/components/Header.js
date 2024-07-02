import { Container, Nav, Navbar, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                            <Nav.Link as={NavLink} to="#" onClick={handleShow} className='a btn shadow-lg text-hover-info poppins-bold' activeClassName='active'>
                            Contact Me
                            </Nav.Link>
                            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                                <Modal.Header className='bg-dark border-0'>
                                    <i class="bi bi-x-circle fs-3 ms-auto cancel" onClick={handleClose}></i>
                                </Modal.Header>
                                <Modal.Body className='bg-dark'>
                                        <p className='text-center fs-3 poppins-medium'>Happy to interact with you!</p>
                                        <p className='text-center fs-3 poppins-light'>You can reach me via:</p>
                                        <div className='text-center '>
                                            <a href='https://github.com/faborada' ><i class="fs-1 px-3 bi bi-github text-info"></i></a>
                                            <a href='https://www.instagram.com/JojoFaborada/' ><i class="fs-1 px-3 bi bi-instagram text-info"></i></a>
                                            <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSHxjNTfPhLrzrQJQFSKRGGfDqVFVgzPjpgwtCvKbXvTnVxntptJFztBJhpBMqNbbFNcPHpq' ><i class="fs-1 px-3 bi bi-google text-info"></i></a>
                                            <a href='https://web.facebook.com/jojo.faborada.7' ><i class="fs-1 px-3 bi bi-facebook text-info"></i></a>
                                        </div>
                                </Modal.Body>
                            </Modal>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
  }
  
  export default Header;
