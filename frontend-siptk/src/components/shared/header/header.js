import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import undipLogo from '../image/logo-undip-mail.png';
import profileImage from '../image/avatar-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
    return (
        <Navbar className="header-container">
            <Navbar.Brand className="header-brand">
                <img
                    src={undipLogo}
                    className="header-logo"
                    alt="Logo Universitas Diponegoro"
                />
                {' Universitas Diponegoro'}
            </Navbar.Brand>
            <Nav className="header-profile">
                <LinkContainer to='/profile'>
                    <Nav.Link>
                        <img
                            src={profileImage}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Profile"/>
                    </Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
}

export default Header;