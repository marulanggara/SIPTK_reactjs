import React, {useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ImportData.css'

function ImportData() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleFileUpload = () => {
        // Di sini Anda bisa menulis kode untuk mengirim file Excel yang dipilih ke backend
        // dan menyimpannya ke dalam tabel database
        console.log("File yang dipilih:", selectedFile);
        // Contoh: Kirim file ke backend menggunakan fetch atau Axios
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <h3>Import Data</h3>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ marginBottom: '30px' }}>
                                <h4 style={{ marginBottom: '10px' }}>Add Data Mahasiswa</h4>
                                <input
                                    type="file"
                                    accept=".xls,.xlsx"
                                    onChange={handleFileChange}
                                    style={{ marginBottom: '10px' }}
                                />
                                <Button
                                    variant="primary"
                                    onClick={handleFileUpload}
                                    disabled={!selectedFile}>
                                    Upload
                                </Button>
                            </div>
                            <div style={{ marginBottom: '30px' }}>
                                <h4 style={{ marginBottom: '10px' }}>Add Data Dosen</h4>
                                <input
                                    type="file"
                                    accept=".xls,.xlsx"
                                    onChange={handleFileChange}
                                    style={{ marginBottom: '10px' }}/>
                                <Button
                                    variant="primary"
                                    onClick={handleFileUpload}
                                    disabled={!selectedFile}>
                                    Upload
                                </Button>
                            </div>
                            <div style={{ marginBottom: '30px' }}>
                                <h4 style={{ marginBottom: '10px' }}>Add Data GPM</h4>
                                <input
                                    type="file"
                                    accept=".xls,.xlsx"
                                    onChange={handleFileChange}
                                    style={{ marginBottom: '10px' }}/>
                                <Button
                                    variant="primary"
                                    onClick={handleFileUpload}
                                    disabled={!selectedFile}>
                                    Upload
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ImportData;