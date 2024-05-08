import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { BsPerson } from "react-icons/bs";
import './PerwalianMahasiswa.css';
import moment from "moment"; // Import moment library for date formatting

function PerwalianMahasiswa() {
    const [nama, setNama] = useState('');
    const [nim, setNim] = useState('');
    const [dosenWali, setDosenWali] = useState('');
    const [tanggalPerwalian, setTanggalPerwalian] = useState(getCurrentDateTime());
    const [ipk, setIpk] = useState('');
    const [semester, setSemester] = useState('');
    const [jumlahSks, setJumlahSks] = useState('');
    const [nomorHp, setNomorHp] = useState('');
    const [uraian, setUraian] = useState('');
    const [masalahAkademik, setMasalahAkademik] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        // Mengatur agar pop-up pesan sukses menghilang setelah 3 detik
        const timer = setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);

        // Membersihkan timer ketika komponen unmount
        return () => clearTimeout(timer);
    }, [showSuccessMessage]);

    // Fungsi untuk mendapatkan tanggal dan waktu saat ini dalam format datetime (YYYY-MM-DD HH:mm:ss)
    function getCurrentDateTime() {
        return moment().format("YYYY-MM-DD HH:mm:ss"); // Format tanggal dan waktu menggunakan moment.js
    }

    const handleReset = () => {
        setNama('');
        setNim('');
        setDosenWali('');
        setTanggalPerwalian(getCurrentDateTime());
        setIpk('');
        setSemester('');
        setJumlahSks('');
        setNomorHp('');
        setUraian('');
        setMasalahAkademik('');
    };

    const handleSubmit = () => {
        // Memeriksa apakah semua form telah terisi
        if (
            !nama ||
            !nim ||
            !dosenWali ||
            !semester ||
            !jumlahSks ||
            !ipk ||
            !nomorHp ||
            !uraian ||
            !masalahAkademik
        ) {
            // Menampilkan pesan error atau popup
            alert('Semua form harus diisi!');
            return; // Hentikan proses submit karena ada data yang belum terisi
        }

        // Jika semua form telah terisi, buat objek newData dan kirim data ke server
        const newData = {
            NamaMaha: nama,
            NimMaha: nim,
            NamaDoswal: dosenWali,
            TanggalPerwalian: getCurrentDateTime(), // Menggunakan fungsi getCurrentDateTime
            Ipk: ipk,
            Semester: semester,
            JumlahSks: jumlahSks,
            NoWa: nomorHp,
            uraian: uraian,
            Masalah: masalahAkademik
        };

        fetch('http://localhost:3000/perwalian', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send data to server.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data berhasil disimpan ke database:', data);
            // Menampilkan pop up atau pesan sukses
            setShowSuccessMessage(true);
            // Reset form setelah berhasil mengirim data
            handleReset();
            // Generate pdf
           // generatePDF();
        })
        .catch(error => {
            console.error('Error:', error);
            // Tambahkan logika lain untuk menangani kesalahan, misalnya menampilkan pesan error
        });
    };



    return (
        <div className="prwln-container">
            <div className="prwln-box">
                <hr />
                <div className="icon-text-container">
                    <BsPerson size={30} />
                    <h5>Pengisian Perwalian</h5>
                </div>
                <hr />
                <Form>
                    <Form.Group controlId="formNama" style={{textAlign: 'left'}}>
                        <Form.Label>Nama:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={nama} 
                            onChange={(e) => setNama(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formNIM" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>NIM:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={nim} 
                            onChange={(e) => setNim(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formDosenWali" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>Dosen Wali:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={dosenWali} 
                            onChange={(e) => setDosenWali(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formTanggalPerwalian" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>Tanggal Perwalian:</Form.Label>
                        <Form.Control 
                            type="date" 
                            value={tanggalPerwalian} 
                            onChange={(e) => setTanggalPerwalian(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formSemester" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>Semester:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={semester} 
                            onChange={(e) => setSemester(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formJumlahSks" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>Jumlah SKS:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={jumlahSks} 
                            onChange={(e) => setJumlahSks(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formIpk" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>IPK:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={ipk} 
                            onChange={(e) => setIpk(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formNomorHp" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>Nomor HP:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={nomorHp} 
                            onChange={(e) => setNomorHp(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formUraian" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>Uraian:</Form.Label>
                        <div>
                            <Form.Check 
                                inline
                                type="radio" 
                                label="Awal Semester" 
                                name="uraian"
                                value="Awal Semester"
                                checked={uraian === "Awal Semester"}
                                onChange={(e) => setUraian(e.target.value)} 
                            />
                            <Form.Check
                                inline 
                                type="radio" 
                                label="Sebelum UTS" 
                                name="uraian"
                                value="Sebelum UTS"
                                checked={uraian === "Sebelum UTS"}
                                onChange={(e) => setUraian(e.target.value)} 
                            />
                            <Form.Check
                                inline 
                                type="radio" 
                                label="Sebelum UAS" 
                                name="uraian"
                                value="Sebelum UAS"
                                checked={uraian === "Sebelum UAS"}
                                onChange={(e) => setUraian(e.target.value)} 
                            />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formMasalahAkademik" style={{textAlign: 'left', marginTop: '10px'}}>
                        <Form.Label>Masalah Akademik:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={masalahAkademik} 
                            onChange={(e) => setMasalahAkademik(e.target.value)} 
                        />
                    </Form.Group>
                    {/* Tombol Reset dan Submit */}
                    <div className="button-container">
                        <Button variant="danger" onClick={handleReset}>Reset</Button>
                        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                    </div>
                </Form>
                {/* Pop up atau pesan sukses */}
                {showSuccessMessage && (
                    <div className="success-message">
                        <p>Data berhasil dikirim!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PerwalianMahasiswa;
