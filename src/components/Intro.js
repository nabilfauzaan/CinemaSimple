import { Col, Container, Row, Button} from 'react-bootstrap';

const Intro = () => {
    return(
        <div className='intro'>
            <Container className='text-white d-flex text-center justify-content-center align-items-center'>
                <Row>
                <Col>
                <div className='title'>NONTON FILM KAPANPUN</div>
                <div className='title'>DAN DI MANAPUN SAJA</div>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro