import React from 'react';
import { Container } from 'react-bootstrap';
import './footer.css'

function Footer() {
    return (
        <Container fluid className="footer-container">
            <div className="footer-content">
                <span className='footer-text'>Copyright © 2024 Universitas Diponegoro | beta - Kapan Bimbingan</span>
                <span className='footer-text'>Ariz And Friends ❤</span>
            </div>
        </Container>
    );
}

export default Footer;