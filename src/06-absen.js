function tampilkanDataAbsen() {
  elTabelAbsen.innerHTML = '';

  for (let i = 0; i < dataAbsen.length; i++) {
    const item = dataAbsen[i];
    const cariSiswa = dataSiswa.find(d => d.nomor === item.nomor)
    if (typeof cariSiswa === 'undefined') continue
    const row = templateRowAbsen.cloneNode(true)
    row.innerHTML = row.innerHTML
      .replace(/nomor-absen/, item.nomor)
      .replace(/nama-siswa/, cariSiswa.nama)
      .replace(/tanggal/, item.tanggal)
      .replace(/jam/, item.jam)
    elTabelAbsen.appendChild(row)
  }
}

function tambahDataAbsen(nomor) {
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
  simpanData(keyAbsen, dataAbsen)
  tampilkanDataAbsen()
}