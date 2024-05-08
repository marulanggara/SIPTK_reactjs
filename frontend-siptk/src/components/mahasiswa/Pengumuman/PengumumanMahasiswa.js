import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Image, Stack } from 'react-bootstrap';
import { FaRegBell } from "react-icons/fa";
import profileImgae from '../MahasiswaHome/avatar-logo.png'
import './PengumumanMahasiswa.css'

const formatTanggal = (tanggal) => {
    const date = new Date(tanggal);
    const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleString('id-ID', options).replace('pukul', '-');
};

function PengumumanMahasiswa() {
    const [pengumumanData, setPengumumanData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/pengumuman');
            const data = await response.json();
            setPengumumanData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <p className="pengumuman-dashboard-header"><FaRegBell size={25}/> PENGUMUMAN</p>
            <div className="pgmn-container">
                {pengumumanData.map((pengumuman, index) => (
                    <div key={index} className="pgmn-box">
                        <div className="profile-container">
                            <div className="profile-image">
                                <Image width={64} height={64} src={profileImgae} roundedCircle />
                            </div>
                            <div>
                                <h5>{pengumuman.pembuat}</h5>
                            </div>
                            <div className="mhs-tanggal">
                                <p>{formatTanggal(pengumuman.TanggalInfo)}</p>
                            </div>
                        </div>
                        <div className="pgmn-content">
                            <h3>{pengumuman.JudulInfo}</h3>
                            <p>{pengumuman.IsiInfo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PengumumanMahasiswa;
