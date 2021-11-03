import React from 'react';
import Col from 'react-bootstrap/esm/Col';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';


function Background() {
    return(
        <Container fluid>
            <Row className="justify-content-center">
                <Col lg></Col>
                <Col md="auto">
                    <Card border="dark" style={{width: '18rem'}}>
                        <Card.Text>Lorem ipsem Dolar, color coded is the best app ever</Card.Text>
                    </Card>
                </Col>
                <Col lg></Col>

            </Row>
        </Container>
    )
        
    
}

export default Background;