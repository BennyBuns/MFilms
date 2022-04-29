import React from 'react';
import { Card, CardText, CardBody, CardTitle, Row, Col, } from 'reactstrap';

function Home() {
    return (
        <div className='container'>
            <Row className='d-flex justify-content-md-center'>
                <Col>
                    <img src='/assets/images/headShot.jpg' height='350' width='175' alt='Daniel Matmor headshot' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="bg-dark text-white absolute" >
                        <CardBody>
                            <CardTitle>Daniel Matmor</CardTitle>
                            <CardText>anyting you want here.</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Home;   
