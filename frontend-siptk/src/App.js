import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MahasiswaDashboard from './components/mahasiswa/MahasiswaDashboard';
import MahasiswaHome from './components/mahasiswa/MahasiswaHome/MahasiswaHome.js';
import PengumumanMahasiswa from './components/mahasiswa/Pengumuman/PengumumanMahasiswa.js';
import PerwalianMahasiswa from './components/mahasiswa/Perwalian/PerwalianMahasiswa.js';
import JadwalPerwalianMahasiswa from './components/mahasiswa/JadwalPerwalian/JadwalPerwalianMahasiswa.js'
import DosenDashboard from './components/dosen/DosenDashboard';
import DosenHome from './components/dosen/DosenHome/DosenHome.js'
import PengumumanDosen from './components/dosen/Pengumuman/PengumumanDosen.js'
import PerwalianDosen from './components/dosen/Perwalian/PerwalianDosen.js'
import JadwalPerwalianDosen from './components/dosen/JadwalPerwalian/JadwalPerwalianDosen.js'
import DetailMahasiswa from './components/dosen/Perwalian/DetailMahasiswa/DetailMahasiswa.js';
import GPMDashboard from './components/gpm/GpmDashboard';
import AdminDashboard from './components/admin/AdminDashboard.js';
import AdminHome from './components/admin/AdminHome/AdminHome.js';
import DataMahasiswa from './components/admin/DataMahasiswa/DataMahasiswa.js';
import DataDosenGPM from './components/admin/DataDosenGPM/DataDosenGPM.js';
import ImportData from './components/admin/ImportData/ImportData.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Mahasiswa" element={<MahasiswaDashboard />}>
          <Route index element={<MahasiswaHome />} />
          <Route path="pengumuman" element={<PengumumanMahasiswa />} />
          <Route path="perwalian" element={<PerwalianMahasiswa />} />
          <Route path="jadwal-perwalian" element={<JadwalPerwalianMahasiswa />} />
        </Route>
        <Route path="/dosen" element={<DosenDashboard />}>
          <Route index element={<DosenHome />} />
          <Route path="pengumuman" element={<PengumumanDosen />} />
          <Route path="perwalian" element={<PerwalianDosen />} />
          <Route path="jadwal-perwalian" element={<JadwalPerwalianDosen />} />
          <Route path="perwalian/detail/:mahasiswaId" element={<DetailMahasiswa />} />
        </Route>
        <Route path="/gpm" element={<GPMDashboard />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<AdminHome />} />
          <Route path="data-mahasiswa" element={<DataMahasiswa />} />
          <Route path="data-dosen-gpm" element={<DataDosenGPM />} />
          <Route path="import-data" element={<ImportData />} />
        </Route>
        <Route path="/" element={<div>masukkan alamat yang benar untuk melihat halaman. Contoh : .../mahasiswa</div>} />
      </Routes>
    </Router>
  );
}

export default App;
