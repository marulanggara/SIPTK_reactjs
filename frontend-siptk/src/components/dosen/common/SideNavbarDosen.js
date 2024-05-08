import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BsPersonCircle, BsBellFill, BsClipboard2Check, BsSpeedometer2, BsCalendar3 } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import 'bootstrap/dist/css/bootstrap.min.css'
import './SideNavbarDosen.css'


function SideNavbar() {
    return (
        <Nav className=" flex-column SideNavbar-custom2" style={{ width: '16.5%', position: 'fixed' }}>
            <div style={{ flex: 1 }}>
                <div className="text-center">
                    <h5 className="mt-2">Nama</h5>
                    <h5 className="mt-2">NIP</h5>
                </div>
                <Button className="custom-button" variant='secondary'>
                    <LinkContainer to="/dosen">
                        <Nav.Link className="sidebar-link2"><BsSpeedometer2 className="me-2 sidebar-link2" size="20px"/>Dashboard</Nav.Link>
                    </LinkContainer>
                </Button>
                <Button className="custom-button" variant='secondary'>
                    <LinkContainer to="/dosen/pengumuman">
                        <Nav.Link className="sidebar-link2"><BsBellFill className="me-2 sidebar-link2" size="20px"/>Pengumuman</Nav.Link>
                    </LinkContainer>
                </Button>
                <Button className="custom1-button" variant='secondary'>
                    <LinkContainer to="/dosen/perwalian">
                        <Nav.Link className="sidebar-link2"><BsClipboard2Check className="me-2 sidebar-link2" size="20px"/>Perwalian</Nav.Link>
                    </LinkContainer>
                </Button>
                <Button className="custom-button" variant='secondary'>
                    <LinkContainer to="/dosen/jadwal-perwalian">
                        <Nav.Link className="sidebar-link2"><BsCalendar3 className="me-2 sidebar-link2" size="20px"/>Jadwal Perwalian</Nav.Link>
                    </LinkContainer>
                </Button>
            </div>
            <div className='custom-logout'>
                <LinkContainer to="/login">
                    <Nav.Link className='custom2-logout-text'><TbLogout2 className="me-2" size="20px"/>Log Out</Nav.Link>
                </LinkContainer>
            </div>
        </Nav>
    );
}

export default SideNavbar;