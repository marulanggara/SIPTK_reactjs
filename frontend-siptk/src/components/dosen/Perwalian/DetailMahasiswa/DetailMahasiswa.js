import React from 'react';

function DetailMahasiswa({ mahasiswaId }) {
    // Di sini Anda dapat melakukan logika untuk mengambil detail mahasiswa berdasarkan ID dari backend atau dari data yang sudah Anda miliki

    // Contoh penggunaan:
    // const detailMahasiswa = fetchDataMahasiswaById(mahasiswaId);

    // Kemudian tampilkan detail mahasiswa di dalam komponen ini

    return (
        <div>
            <h2>Detail Mahasiswa</h2>
            <p>ID Mahasiswa: {mahasiswaId}</p>
            {/* Tampilkan informasi detail mahasiswa di sini */}
        </div>
    );
}

export default DetailMahasiswa;