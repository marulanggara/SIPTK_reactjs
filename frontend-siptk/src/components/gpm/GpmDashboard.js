import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function GPMDashboard() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h5">Dashboard GPM</Card.Header>
                        <Card.Body>
                            <Card.Title>Selamat Datang, GPM!</Card.Title>
                            <Card.Text>
                                Informasi penting GPM akan ditampilkan di sini.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default GPMDashboard;