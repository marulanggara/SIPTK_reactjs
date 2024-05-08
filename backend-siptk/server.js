const express = require('express');
const cors = require('cors');
const database = require('./database'); // Import file database.js

const app = express();
const port = process.env.PORT || 3000; // Atur port sesuai kebutuhan Anda

app.use(cors());
app.use(express.json());

// Endpoint untuk mengambil data perwalian dari database
app.get('/perwalian', (req, res) => {
  const query = 'SELECT * FROM perwalian'; // Ganti 'perwalian' dengan nama tabel Anda
  database.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// Endpoint untuk menyimpan data perwalian ke dalam database
app.post('/perwalian', (req, res) => {
  const newData = req.body;
  const query = 'INSERT INTO perwalian SET ?'; // Query SQL untuk menyimpan data ke dalam tabel perwalian

  database.query(query, newData, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    console.log('Data perwalian baru berhasil disimpan:', newData);
    res.status(201).json({ message: 'Data perwalian berhasil disimpan.' });
  });
});

// Endpoint untuk mendapatkan data pengumuman
app.get('/pengumuman', (req, res) => {
  const query = 'SELECT * FROM pengumuman'; // Ganti 'pengumuman' dengan nama tabel Anda
  database.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// Endpoint untuk mendapatkan data mahasiswa
app.get('/mahasiswa', (req, res) => {
  const query = 'SELECT * FROM mahasiswa'; // Ganti 'mahasiswa' dengan nama tabel Anda
  database.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// Endpoint untuk menolak permintaan perwalian
app.patch('/perwalian/:IdPerwalian/reject', (req, res) => {
  const { id } = req.params;
  const query = 'UPDATE perwalian SET status = ? WHERE IdPerwalian = ?'; // Query SQL untuk menolak permintaan perwalian

  database.query(query, ['reject', id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    console.log('Permintaan perwalian berhasil ditolak');
    
    // Mengambil kembali data perwalian setelah permintaan berhasil diproses
    const queryPerwalian = 'SELECT * FROM perwalian';
    database.query(queryPerwalian, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      setPerwalian(results); // Memperbarui state perwalian di klien
      res.status(200).json(results); // Mengirim kembali data perwalian
    });
  });
});

// Endpoint untuk menyetujui permintaan perwalian
app.patch('/perwalian/:IdPerwalian/approve', (req, res) => {
  const { id } = req.params;
  const query = 'UPDATE perwalian SET status = ? WHERE IdPerwalian = ?'; // Query SQL untuk menyetujui permintaan perwalian

  database.query(query, ['approve', id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    console.log('Permintaan perwalian berhasil disetujui');
    
    // Mengambil kembali data perwalian setelah permintaan berhasil diproses
    const queryPerwalian = 'SELECT * FROM perwalian';
    database.query(queryPerwalian, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      setPerwalian(results); // Memperbarui state perwalian di klien
      res.status(200).json(results); // Mengirim kembali data perwalian
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
