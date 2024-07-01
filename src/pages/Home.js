import { Container, Row, Col, Image, Card} from 'react-bootstrap';
import profile from '../images/profile.png';
import stack1 from '../images/html5.png';
import stack2 from '../images/css.png';
import stack3 from '../images/bootstrap.png';
import stack4 from '../images/js.png';
import stack5 from '../images/php.png';
import stack6 from '../images/whatido.jpg';
import stack7 from '../images/whychooseme.png';

function Home() {
    return(
        <div id='home'className='px-lg-5'>
            <Container fluid>
                <Row lg={2} xs={1} className='gap-0'>
                    <Col lg={7} className='order-2 order-lg-1 m-lg-auto pt-lg-5 pt-2 text-center text-lg-start'>
                        <h1 className='fs-lg-large mt-lg-5'>Jojo Faborada</h1>
                        <h3>Aspiring Software Developer</h3>
                        <h5 className='py-lg-4 poppins-light'>An aspiring software developer and recent IT graduate.  Discover more<br/> about my skills and projects</h5>
                        <h3 className='mt-lg-4 mt-4'>Stack</h3>
                        <Row xs={5}>
                            <Col lg={2}>
                                <Card className=' border-info border-3'>
                                    <Image src={stack1} fluid/>
                                </Card>
                            </Col>
                            <Col lg={2}>
                                <Card className=' border-info border-3'>
                                    <Image src={stack2} fluid/>
                                </Card>
                            </Col>
                            <Col lg={2}>
                                <Card className=' border-info border-3'>
                                    <Image src={stack3} fluid/>
                                </Card>
                            </Col>
                            <Col lg={2}>
                                <Card className=' border-info border-3'>
                                    <Image src={stack4} fluid/>
                                </Card>
                            </Col>
                            <Col lg={2}>
                                <Card className=' border-info border-3'>
                                    <Image src={stack5} fluid/>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={5} className='order-1 order-lg-2'>
                       <Image src={profile} fluid className='h-75 float-lg-start w-75 h-auto mx-5'/> 
                    </Col>
                </Row>
                <Card className='mt-lg-5 mt-3 shadow border-info border-3'>
                    <Row lg={2} xs={1}>
                        <Col className='m-auto p-lg-5 order-2 order-lg-1 pt-2'>
                            <h3 className='text-center'>What I Do?</h3>
                            <p className='text-justify'>
                            I specialize in crafting robust web applications and intuitive user interfaces. In front-end design, I bring ideas to life with clean, efficient code. Dive into my showcased projects to see what I've been working on.
                            </p>
                        </Col>
                        <Col className='order-1 order-lg-2'>
                            <div className='overflow-hidden'>
                                <Image src={stack7} fluid className='zoom'/>
                            </div>
                        </Col>
                    </Row>
                </Card>
                <Card className='mt-lg-5 mt-3 shadow border-info border-3'>
                    <Row lg={2} xs={1}>
                        <Col>
                            <div className='overflow-hidden'>
                                <Image src={stack6} fluid  className='zoom'/>
                            </div>
                        </Col>
                        <Col className='m-auto p-lg-5 pt-2'>
                            <h3 className='text-center'>Why choose Me?</h3>
                            <p className='text-justify'>
                            With a keen eye for detail and a knack for problem-solving, I strive to create seamless digital experiences. Whether it's building responsive websites or optimizing performance, I am committed to delivering excellence in every line of code.
                            </p>
                        </Col>
                    </Row>
                </Card>
                <Card className='bg-transparent text-white border-0 m-auto p-lg-5'>
                <p className='text-white p-lg-5 text-justify fs-3 fs-md'>Ready to collaborate or have a project in mind? Let's discuss how we can bring your ideas to fruition. Drop me a message through my social media accounts or connect with me on <a href="https://github.com/faborada" rel="noreferrer" className='text-info'> Github </a>. Let's build something amazing together!</p>
                </Card>
            </Container>
        </div>
    );
}
export default Home;