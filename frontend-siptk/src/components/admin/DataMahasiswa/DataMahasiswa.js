import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, FormControl, Table } from 'react-bootstrap';
import { RiAlarmWarningFill } from "react-icons/ri";
import './DataMahasiswa.css';

function DataMahasiswa() {
    const [mahasiswa, setMahasiswa] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchMahasiswa = async () => {
            try {
                const response = await fetch('http://localhost:3000/mahasiswa');
                if (!response.ok) throw new Error('Something went wrong');
                const data = await response.json();
                setMahasiswa(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchMahasiswa();
    }, []);

    const filteredMahasiswa = mahasiswa.filter(mhs =>
        mhs.NamaMaha.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openWhatsApp = (phoneNumber) => {
        // Menambahkan kode negara jika diperlukan (misalnya: Indonesia memiliki kode negara +62)
        const countryCode = '+62'; // Ganti dengan kode negara yang sesuai
        const formattedPhoneNumber = `${countryCode}${phoneNumber}`;

        // Membentuk URL untuk WhatsApp Web
        const whatsappUrl = `https://web.whatsapp.com/send?phone=${formattedPhoneNumber}`;

        // Membuka WhatsApp Web di tab baru
        window.open(whatsappUrl, '_blank');
    };


    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <h3>Data Mahasiswa</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-3">
                                <div>
                                    <Button variant="primary" className="me-2 ">Tambah Mahasiswa</Button>
                                    <Button variant="danger" className="me-2">Hapus Mahasiswa</Button>
                                    <Button variant="warning">Edit Mahasiswa</Button>
                                </div>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Cari Mahasiswa"
                                        className="me-2"
                                        aria-label="Search"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <Button variant="outline-success">Cari</Button>
                                </Form>
                            </div>
                            <Table responsive="sm" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>NIM</th>
                                        <th>Semester</th>
                                        <th>Ipk</th>
                                        <th>Jumlah Sks</th>
                                        <th>Nomor HP</th>
                                        <th>Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredMahasiswa.map((mhs, index) => (
                                        <tr key={mhs.IdMaha}>
                                            <td>{index + 1}</td>
                                            <td>{mhs.NamaMaha}</td>
                                            <td>{mhs.NimMaha}</td>
                                            <td>{mhs.Semester}</td>
                                            <td>{mhs.Ipk}</td>
                                            <td>{mhs.JumlahSks}</td>
                                            <td>
                                                <Button variant="link" onClick={() => openWhatsApp(mhs.NoWa)}>Chat via WhatsApp</Button>
                                            </td>                                            
                                            <td>...</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default DataMahasiswa;
