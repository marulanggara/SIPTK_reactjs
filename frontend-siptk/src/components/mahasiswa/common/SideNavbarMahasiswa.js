import React, { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BsPersonCircle, BsBellFill, BsClipboard2Check, BsSpeedometer2, BsCalendar3 } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SideNavbarMahasiswa.css';

function SideNavbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            <button className="sidebar-toggle-button" onClick={toggleSidebar}>
                <span className="sidebar-toggle-icon">{sidebarOpen ? '✖' : '☰'}</span>
            </button>
            <Nav className={`flex-column SideNavbar-custom1 ${sidebarOpen ? 'active' : ''}`} style={{ width: '16.5%', position: 'fixed' }}>
                <div style={{ flex: 1 }}>
                    <div className="text-center">
                        <BsPersonCircle className="lb-light" size="100px" />
                        <h5 className="mt-2">Nama</h5>
                        <h5 className="mt-2">NIM</h5>
                    </div>
                    <Button className="custom-button" variant='secondary'>
                        <LinkContainer to="/mahasiswa">
                            <Nav.Link className="sidebar-link1"><BsSpeedometer2 className="me-2 sidebar-link1" size="20px"/>Dashboard</Nav.Link>
                        </LinkContainer>
                    </Button>
                    <Button className="custom-button" variant='secondary'>
                        <LinkContainer to="/mahasiswa/pengumuman">
                            <Nav.Link className="sidebar-link1"><BsBellFill className="me-2 sidebar-link1" size="20px"/>Pengumuman</Nav.Link>
                        </LinkContainer>
                    </Button>
                    <Button className="custom1-button" variant='secondary'>
                        <LinkContainer to="/mahasiswa/perwalian">
                            <Nav.Link className="sidebar-link1"><BsClipboard2Check className="me-2 sidebar-link1" size="20px"/>Perwalian</Nav.Link>
                        </LinkContainer>
                    </Button>
                    <Button className="custom-button" variant='secondary'>
                        <LinkContainer to="/mahasiswa/jadwal-perwalian">
                            <Nav.Link className="sidebar-link1"><BsCalendar3 className="me-2 sidebar-link1" size="20px"/>Jadwal Perwalian</Nav.Link>
                        </LinkContainer>
                    </Button>
                </div>
                <div className='custom-logout'>
                    <LinkContainer to="/login">
                        <Nav.Link className='custom1-logout-text'><TbLogout2 className="me-2" size="20px"/>Log Out</Nav.Link>
                    </LinkContainer>
                </div>
            </Nav>
        </div>
    );
}

export default SideNavbar;
