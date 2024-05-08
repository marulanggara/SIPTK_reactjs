import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Image, Stack } from 'react-bootstrap';
import { BsChatLeftText } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { RiAlarmWarningFill } from "react-icons/ri";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import './DosenHome.css';

function DosenHome() {
    const [perwalianData, setPerwalianData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/perwalian'); // Ganti dengan URL endpoint server backend Anda
            const data = await response.json();
            console.log(data);
            setPerwalianData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const events = [
        {
            title: "Apa coba",
            start: "2024-04-25T08:00:00",
            end: "2023-04-25T09:00:00",
        },
    ];

    return (
        <div>
            <h1 className="admin-dashboard-header">Selamat Datang, Nama Dosen</h1>
            <h5 className="siptk-header">Sistem Informasi Perwalian Teknik Komputer (SIPTK)</h5>
            <hr className="siptk-line" />

            <div className="announcement-container">
                <div className="announcement-box1">
                    <h4>Notifikasi Perwalian<Link to="/dosen/pengumuman"><BsChatLeftText className="pengumuman-icon" /></Link></h4>
                    <Card className='custom-card'>
                        <Card.Body className='card-body-scrollable'>
                            <Stack gap={2}>
                                {perwalianData.map((rowData, index) => (
                                    <div key={index} className='perwalian-container'>
                                        <div className="perwalian-table">
                                            <div className="perwalian-row">
                                                
                                                <div className="perwalian-cell" style={{textAlign: 'left', width: '30%'}}>
                                                    <p>{rowData.NamaMaha}</p>
                                                    <p>{rowData.NimMaha}</p>
                                                </div>
                                                <div className="perwalian-cell" style={{textAlign: 'left', width: '40%'}}>
                                                    <p>info: {rowData.Masalah}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Stack>
                        </Card.Body>
                    </Card>
                </div>
                <div className="academic-status-box1" >
                    <h4><RiAlarmWarningFill size={30}/> Status Mahasiswa</h4>
                    <Card className='custom-card'>
                        <Card.Body className='card-body-scrollable'>
                            <Stack gap={2}>
                                {perwalianData.map((rowData, index) => (
                                    <div key={index} className='perwalian-container'>
                                        <div className="perwalian-table">
                                            <div className="perwalian-row">                                                
                                                <div className="perwalian-cell" style={{textAlign: 'left', width: '30%'}}>
                                                    <p>{rowData.NamaMaha}</p>
                                                    <p>{rowData.NimMaha}</p>
                                                </div>
                                                <div className="perwalian-cell" style={{textAlign: 'center', width: '20%'}}>
                                                    {(rowData.Ipk < 2 || rowData.JumlahSKS < 100) && <GoDotFill size={50} color="red" />}
                                                    {(rowData.Ipk >= 2.5 || rowData.JumlahSKS > 100)&& rowData.Ipk < 3 && <GoDotFill size={50} color="orange" />}
                                                    {(rowData.Ipk >= 3 || rowData.JumlahSKS > 100)&& <GoDotFill size={50} color="green" />}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Stack>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div>
                <Card>
                    <Card.Header>
                        <h4 className='header-card'>Kalender</h4>
                    </Card.Header>
                    <Card.Body>
                        <Fullcalendar 
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView={"dayGridMonth"}
                            headerToolbar={{
                                start: "today prev,next", 
                                center: "title",
                                end: "dayGridMonth,timeGridWeek,timeGridDay", 
                            }}
                            height={"90vh"}
                            events={events}
                            eventDidMount={(info) => {
                                return new bootstrap.Popover(info.el, {
                                    title: info.event.title,
                                    placement: "auto",
                                    trigger: "hover",
                                    customClass: "popoverStyle",
                                    content:
                                        "<p>Isi Konten</strong>.</p>",
                                    html: true,
                                });
                            }}
                        />
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default DosenHome;
