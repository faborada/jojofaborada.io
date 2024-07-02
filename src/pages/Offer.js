import { Container, Row, Col, Card, Image} from 'react-bootstrap';
import stack1 from '../images/html5.png';
import stack2 from '../images/css.png';
import stack3 from '../images/bootstrap.png';
import stack4 from '../images/js.png';
import stack5 from '../images/php.png';
import stack6 from '../images/react.png';
function Offer() {
    return(
        <div id='offer'className='px-lg-5'>
            <Container fluid>
            <p className='fs-lg-large poppins-bold border-bottom border-2 border-info'>Services</p>
                <Row xs={1} md={3} className="g-lg-5 mt-lg-5">
                    <Col className='my-3'>
                    <Card className='py-1'>
                        <Image variant="top" src={stack1} fluid className=' w-50 m-auto' />
                        <Card.Body>
                        <p className='poppins-bold text-center'>Crafting clean, semantic, and well-structured web pages.</p>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className='my-3'>
                    <Card className='py-1'>
                        <Image variant="top" src={stack2} fluid className=' w-50 m-auto' />
                        <Card.Body>
                        <p className='poppins-bold text-center'> Implementing custom styles to enhance the visual appeal and user experience.</p>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className='my-3'>
                    <Card className='py-1'>
                        <Image variant="top" src={stack3} fluid className=' w-50 m-auto' />
                        <Card.Body>
                        <p className='poppins-bold text-center'>Developing mobile-first, responsive websites with ease.</p>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className='my-3'>
                    <Card className='py-1'>
                        <Image variant="top" src={stack4} fluid className=' w-50 m-auto' />
                        <Card.Body>
                        <p className='poppins-bold text-center'>Adding interactivity and functionality to enhance user experience.</p>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className='my-3'>
                    <Card className='py-1'>
                        <Image variant="top" src={stack5} fluid className=' w-50 m-auto' />
                        <Card.Body>
                        <p className='poppins-bold text-center'>Developing dynamic and secure server-side applications to meet your business needs.</p>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col className='my-3'>
                    <Card className='py-1'>
                        <Image variant="top" src={stack6} fluid className=' w-50 m-auto' />
                        <Card.Body>
                        <p className='poppins-bold text-center'>Building efficient, component-based user interfaces for scalable applications.</p>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>  
                <Row className='mt-4'>
                    <Col>
                        <Card className='m-auto border-0 p-3'>
                            <p className='text-center px-lg-5 pt-lg-4 fs-md poppins-semibold'>Front-End Development</p>
                            <p className='px-lg-5 pt-lg-4'>Transform your designs into reality with my front-end development services:</p>
                            <Container>
                                <ul>
                                    <li><p>UI/UX Design Integration: Converting design mockups into fully functional front-end code</p></li>
                                    <li><p>Responsive Design: Ensuring your website looks great on all devices, from desktops to smartphones.</p></li>
                                    <li><p>Performance Optimization: Enhancing website speed and efficiency for a smooth user experience.</p></li>
                                </ul>
                            </Container>
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        <Card className='m-auto border-0 p-3'>
                            <p className=' text-center px-lg-5 pt-lg-4 fs-md poppins-semibold'>Additional Services</p>
                            <p className='px-lg-5 pt-lg-4'>Beyond web development, I provide a range of additional services to support your project:</p>
                            <Container >
                            <ul>
                                <li><p>Website Maintenance: Keeping your website up-to-date with regular updates and fixes.</p></li>
                                <li><p>SEO Optimization: Implementing best practices to improve your website's search engine ranking.</p></li>
                                <li><p>Consultation & Strategy: Offering insights and advice on the best technologies and approaches for your project.</p></li>
                            </ul>
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Offer;