import React, {useState, useEffect}from 'react';
import { Container, Row, Col, Card, Button, Form, FormControl, Table } from 'react-bootstrap';
import { BsPersonFillAdd } from "react-icons/bs";
import { RiAlarmWarningFill } from "react-icons/ri";
import './DataDosenGPM.css'

function DataDosenGPM() {
    // const [mahasiswa, setMahasiswa] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDosenGPM, setFilteredDosenGPM] = useState([]);

    useEffect(() => {
        const results = DosenGPM.filter(DosenGPM =>
            DosenGPM.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDosenGPM(results);
        // const fetchMahasiswa = async () => {
        //     setLoading(true);
        //     setError(null);
        //     try {
        //         const response = await fetch('/api/mahasiswa');  // Sesuaikan dengan URL API yang sebenarnya
        //         if (!response.ok) throw new Error('Something went wrong');
        //         const data = await response.json();
        //         setMahasiswa(data);
        //     } catch (err) {
        //         setError(err.message || 'Unexpected Error!');
        //     } finally {
        //         setLoading(false);
        //     }
        // };

        // fetchMahasiswa();
    }, [searchTerm]);

    // if (loading) return <p>Loading data...</p>;
    // if (error) return <p>Error: {error}</p>

    const DosenGPM = [
        { id: 1, name: 'Ariz Muhammad Fajar', nip: '2222222222',  address: 'Padang, Indonesia', phone: '081234567890', status: 'Dosen & GPM' },
        { id: 2, name: 'Fitra', nip: '3333333333',  address: 'Jakarta, Indonesia', phone: '081234567890', status: 'Dosen' },
        { id: 3, name: 'Marul', nip: '444444444',  address: 'Pati, Indonesia', phone: '081234567890', status: 'Dosen' }
    ];
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <h3>Data Dosen & GPM</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-3">
                                <div>
                                    <Button variant="primary" className="me-2 ">Tambah Dosen & GPM</Button>
                                    <Button variant="danger" className="me-2">Hapus Dosen & GPM</Button>
                                    <Button variant="warning">Edit Dosen & GPM</Button>
                                </div>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Cari Dosen & GPM"
                                        className="me-2"
                                        aria-label="Search"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <Button variant="outline-success">Cari</Button>
                                </Form>
                            </div>
                            {/* Tabel untuk menampilkan data mahasiswa */}
                            <Table responsive="sm" striped bordered hover>
                                <thead text-align= ''>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>NIP</th>
                                        <th>Alamat</th>
                                        <th>Nomor HP</th>
                                        <th>Status</th>
                                        <th>Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredDosenGPM.map((dsngpm, index) => (
                                        <tr key={dsngpm.id}>
                                            <td>{index + 1}</td>
                                            <td>{dsngpm.name}</td>
                                            <td>{dsngpm.nip}</td>
                                            <td>{dsngpm.address}</td>
                                            <td>{dsngpm.phone}</td>
                                            <td>{dsngpm.status}</td>
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


export default DataDosenGPM;