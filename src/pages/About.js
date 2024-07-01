import { Container, Row, Col, Card, Image} from 'react-bootstrap';
import stack1 from '../images/html5.png';
import stack2 from '../images/css.png';
import stack3 from '../images/bootstrap.png';
import stack4 from '../images/js.png';
import stack5 from '../images/php.png';
import stack6 from '../images/react.png';
function About() {
    return(
        <div id='about'className='px-lg-5'>
            <Container fluid>
                <p className='fs-lg-large poppins-bold border-bottom border-2 border-info'>About</p>
                <Row>
                    <Col className='m-auto text-justify'>
                        <Card className='bg-transparent text-white border-0 m-auto'>
                            <p className='text-white text-justify fs-md'>My journey in web development has equipped me with a solid foundation in various front-end technologies, and I'm continually expanding my skill set to stay ahead in the ever-evolving tech landscape.</p>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='m-auto text-justify py-lg-4 py-2'>
                        <Card className='bg-transparent text-white border-0 m-auto'>
                                <Row>
                                    <Col>
                                        <p className='text-white px-lg-5 pt-lg-4 text-center fs-md poppins-semibold'>Details</p>
                                        <Card className='p-3 bg-transparent shadow-lg text-white border-1 border-info h-75-min'>
                                            <Row>
                                                <Col>
                                                    <ul>
                                                        <li><p><b>Address:</b> Manalad Ilog Negros. Occidental</p></li>
                                                        <li><p><b>Birthdate:</b> January 28, 2002</p></li>
                                                        <li><p><b>Gmail:</b> <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSHxjNTfPhLrzrQJQFSKRGGfDqVFVgzPjpgwtCvKbXvTnVxntptJFztBJhpBMqNbbFNcPHpq" rel="noreferrer" className='text-info'>jojofaborada@gmail.com</a></p></li>
                                                        <li><p><b>Contact No.:</b> 09517698495</p></li>
                                                    </ul>
                                                </Col>
                                                <Col>
                                                <p className='text-white text-center mb-0 fs-sm poppins-semibold'>College</p>
                                                <p className='text-white text-center mt-0 fs-sm poppins-light'>Central Philippines State University<br/> 2023-2024</p>
                                                <p className='text-white text-center mb-0 fs-sm poppins-semibold'>High School</p>
                                                <p className='text-white text-center mt-0 fs-sm poppins-light'>Juan Gequillana National High School<br/> 2019-2020</p>
                                                <p className='text-white text-center mb-0 fs-sm poppins-semibold'>Elementary</p>
                                                <p className='text-white text-center mt-0 fs-sm poppins-light'>Julian P. Gomilla Elementary School<br/> 2013-2014</p>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <p className='text-white px-lg-5 pt-4 text-center fs-md poppins-semibold'>Social Links</p>
                                            <Card className='p-3 bg-transparent shadow-lg text-white border-1 border-info h-75-min'>
                                                <ul  className='m-lg-auto'>
                                                    <li><p><a href="https://web.facebook.com/jojo.faborada.7" rel="noreferrer" className='text-info'><b className='text-white poppins-semibold'>Facebook:</b> https://web.facebook.com/jojo.faborada.7 </a></p></li>
                                                    <li><p><a href="https://www.instagram.com/JojoFaborada/" rel="noreferrer" className='text-info'> <b className='text-white poppins-semibold'>Instagram:</b> https://www.instagram.com/JojoFaborada/ </a></p></li>
                                                    <li><p><a href="https://github.com/faborada" rel="noreferrer" className='text-info'> <b className='text-white poppins-semibold'>Github:</b> https://github.com/faborada</a></p></li>
                                                    <li><p className=' text-start'><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSHxjNTfPhLrzrQJQFSKRGGfDqVFVgzPjpgwtCvKbXvTnVxntptJFztBJhpBMqNbbFNcPHpq" rel="noreferrer" className='text-info'> <b className='text-white poppins-semibold'>Email:</b> https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=</a></p></li>
                                                </ul>
                                            </Card>
                                    </Col>
                                </Row>
                
                        </Card>
                    </Col>
                </Row>
                <Row className=' p-lg-3'>
                <p className='text-white px-lg-5 pt-4 text-center fs-md poppins-semibold'>Technology Stack</p>
                    <Col lg={8} className='m-auto'>
                        <ul>
                            <li>
                                <p className='text-justify'><b>HTML : </b> Crafting the structure of web pages with clean and semantic markup.</p>
                            </li>
                            <li>
                                <p className='text-justify'><b>CSS : </b> Designing visually appealing and responsive layouts with an eye for detail.</p>
                            </li>
                            <li>
                                <p className='text-justify'><b>BOOTSTRAP : </b> Utilizing the power of Bootstrap for efficient and consistent styling.</p>
                            </li>
                            <li>
                                <p className='text-justify'><b>JAVASCRIPT : </b> Bringing interactivity and functionality to web applications.</p>
                            </li>
                            <li>
                                <p className='text-justify'><b>REACT : </b> Building dynamic and performant user interfaces with React, leveraging its component-based architecture for efficient development.</p>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                    <Card className='p-3 border-0 bg-transparent'>
                        <Row className='g-4 row-cols-3'>
                            <Col>
                                <Card className='shadow-lg'>
                                    <Image src={stack1} fluid/>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='shadow-lg'>
                                    <Image src={stack2} fluid/>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='shadow-lg'>
                                    <Image src={stack3} fluid/>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='shadow-lg'>
                                    <Image src={stack4} fluid/>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='shadow-lg'>
                                    <Image src={stack5} fluid/>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='shadow-lg'>
                                    <Image src={stack6} fluid/>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='m-auto text-justify pt-4'>
                        <Card className='bg-transparent text-white border-0 m-auto  pt-lg-5'>
                            <p className='text-white text-justify fs-md'>I'm enthusiastic about learning new technologies and best practices in web development, and I'm excited to contribute to innovative projects. Let's build something amazing together!</p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default About;