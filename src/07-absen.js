function tampilkanDataAbsen() {
  elTabelAbsen.innerHTML = '';
  const jumlahAbsen = dataAbsen.length;

  for (let i = 0; i < jumlahAbsen; i++) {
    const item = dataAbsen[i];
    const cariSiswa = dataSiswa.find(d => d.nomor === item.nomor)
    if (typeof cariSiswa === 'undefined') continue
    const row = templateRowAbsen.cloneNode(true)
    row.innerHTML = row.innerHTML
      .replace(/nomor-absen/g, item.nomor)
      .replace(/nama-siswa/g, cariSiswa.nama)
      .replace(/tanggal/g, item.tanggal)
      .replace(/jam/g, item.jam)
    elTabelAbsen.appendChild(row)
  }
}

function tambahDataAbsen(nomor) {
  if (nomor === '') {
    alert('Mohon lengkapi isian!');
    return;
  }

  const cariSiswa = dataSiswa.find(d => d.nomor === nomor)
  if (typeof cariSiswa === 'undefined') {
    alert(`Data Siswa dengan Nomor Absen ${nomor} tidak ditemukan!`)
    return
  }
  
  if (confirm(`Lanjut absen #${nomor} ${cariSiswa.nama}?`) === false) {
    return
  }
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');

  const tanggalMasuk = `${year}-${month}-${day}`
  const jamMasuk = `${hour}:${minute}:${second}`

  const cariAbsen = dataAbsen.find(d => d.tanggal === tanggalMasuk && d.nomor === nomor)
  if (typeof cariAbsen !== 'undefined') {
    alert(`${cariSiswa.nama} sudah absen hari ini`)
    return
  }

  dataAbsen.push({ nomor, tanggal: tanggalMasuk, jam: jamMasuk });
  simpanData('absen', dataAbsen)
  tampilkanDataAbsen()
  elFormAbsen.reset()
}

tampilkanDataAbsen()