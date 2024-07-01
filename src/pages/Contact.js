import { Container, Row, Col, Card} from 'react-bootstrap';
function Contact() {
    return(
        <div id='contact'className='px-lg-5'>
            <Container fluid>
            <p className='fs-lg-large poppins-bold border-bottom border-2 border-info'>Contact</p>
                <Row>
                    <Col>
                        <Card>
                            Cotact COntent
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Contact;