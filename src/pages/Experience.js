import { Container, Row, Col, Card} from 'react-bootstrap';
function Experience() {
    return(
        <div id='experience'className='px-lg-5'>
            <Container fluid>
            <p className='fs-lg-large poppins-bold border-bottom border-2 border-info'>Experience</p>
                <Row>
                    <Col>
                        <Card>
                            Experience COntent
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Experience;