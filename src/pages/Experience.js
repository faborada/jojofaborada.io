import { Container, Row, Col, Card, Image} from 'react-bootstrap';
import stack1 from '../images/intern1.jpg';
import stack2 from '../images/intern2.jpg';
import stack3 from '../images/intern3.jpg';
function Experience() {
    return(
        <div id='experience'className='px-lg-5'>
            <Container fluid>
            <p className='fs-lg-large poppins-bold border-bottom border-2 border-info'>Experience</p>
                <Row>
                    <Col>
                        <p className='text-justify'>
                        Here are some snapshots from my internship at the Philippine Postal Corporation (PhilPost), capturing various moments and tasks I was involved in. These include delivering important documents and IDs, organizing mail, assisting customers, and supporting office staff with administrative duties. This internship provided me with a significant learning experience, offering a hands-on understanding of postal operations and the importance of efficient and reliable service.
                        </p>
                        <p className='text-justify py-4'>
                        These photos highlight the diverse responsibilities I handled during my time at PhilPost. From delivering essential documents and IDs to providing customer assistance and performing administrative tasks, each moment contributed to my professional growth and deepened my understanding of postal operations. This experience honed my organizational and communication skills while underscoring the value of diligence and accuracy in every task.
                        </p>
                    </Col>
                </Row>
                <Row xs={1} lg={3}>
                    <Col>
                        <Card className='h-75 overflow-hidden'>
                            <Image src={stack1} className="object-fit-cover h-100 zoom" />
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-75 overflow-hidden'>
                            <Image src={stack2} className="object-fit-cover h-100 zoom" />
                        </Card>
                    </Col>
                    <Col>
                        <Card className='h-75 overflow-hidden'>
                            <Image src={stack3} className="object-fit-cover h-100 zoom" />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Experience;