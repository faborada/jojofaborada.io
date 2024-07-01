import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return(
        <div className='px-lg-5 py-lg-4 bg-dark mt-4 border-top border-body shadow' data-bs-theme="dark">
            <Container fluid>
                <Row className="poppins-thin mt-2">
                    <Col>
                        <p>© 2024 JojoFaborada. All rights reserved.</p>
                    </Col>
                    <Col className="text-end">
                        <a href="https://web.facebook.com/jojo.faborada.7" rel="noreferrer">Facebook </a>|<a href="https://www.instagram.com/JojoFaborada/" rel="noreferrer"> Instagram </a>|<a href="https://github.com/faborada" rel="noreferrer"> Github </a>|<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSHxjNTfPhLrzrQJQFSKRGGfDqVFVgzPjpgwtCvKbXvTnVxntptJFztBJhpBMqNbbFNcPHpq" rel="noreferrer"> Email</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Footer;