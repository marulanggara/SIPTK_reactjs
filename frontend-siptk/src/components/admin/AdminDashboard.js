import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import SideNavbar from './common/SideNavbarAdmin';
import Header from '../shared/header/header';
import Footer from '../shared/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminDashboard() {
    return (
        <div>
            <Header />
            <Container fluid>
                <Row>
                    <Col md={2} style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <SideNavbar />
                    </Col>
                    <Col md={10} style={{ paddingLeft: 20, marginBottom: 40}}>
                        
                        <Outlet />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default AdminDashboard;