function tampilkanDataSiswa() {
  elTabelSiswa.innerHTML = ''
  const jumlahSiswa = dataSiswa.length
  for (let i = 0; i < jumlahSiswa; i++) {
    const item = dataSiswa[i]
    const row = templateRowSiswa.cloneNode(true)
    row.innerHTML = row.innerHTML
      .replace(/nomor-absen/g, item.nomor)
      .replace(/nama-siswa/g, item.nama)
      .replace(/\(-1\)/g, `(${i})`)
    elTabelSiswa.appendChild(row)
  }
}

function editSiswa(z) {
  indexDataUpdate = z
  const data = dataSiswa[z]
  if (typeof data === 'undefined') {
    alert('Data tidak ditemukan')
    return
  }
  elNamaSiswa.value = data.nama
  elNomorAbsenSiswa.value = data.nomor
  elButtonSiswa.innerText = 'Update Data'
}

function hapusSiswa(z) {
  const data = dataSiswa[z]
  if (typeof data === 'undefined') {
    alert('Data tidak ditemukan')
    return
  }
  if (confirm(`Yakin ingin menghapus ${data.nama}?`) === false) {
    return
  }
  dataSiswa.splice(z, 1)
  simpanData(keySiswa, dataSiswa)
  tampilkanDataSiswa()
}

function tambahSiswa(event) {
  event.preventDefault();
  console.log('tombol tambah data di-klik');
  let namaSiswa = elNamaSiswa.value;
  let nomorAbsen = elNomorAbsenSiswa.value;
  if (namaSiswa === '' || nomorAbsen === '') {
    alert('Mohon lengkapi isian!')
    return
  }
  const nomor = Number(nomorAbsen)

  if (indexDataUpdate > -1) {
    const data = dataSiswa[indexDataUpdate]
    let pesan = ''
    if (data.nomor !== nomor) {
      const cariSiswa = dataSiswa.find(d => d.nomor === nomor)
      if (typeof cariSiswa !== 'undefined') {
        alert('Nomor Absen Sudah Digunakan')
        return
      }
      pesan = `nomor absen ${data.nomor} menjadi ${nomor}`
    }
    if (data.nama !== namaSiswa) {
      if (pesan !== '') {
        pesan = `${pesan} dan `
      }
      pesan = `${pesan} nama siswa ${data.nama} menjadi ${namaSiswa}`
    }
    if (pesan === '') {
      return
    }
    if (confirm(`Yakin ingin mengedit ${pesan}?`) === false) {
      return
    }
    elButtonSiswa.innerText = 'Tambah Data'
    dataSiswa.splice(indexDataUpdate, 1, { nomor, nama: namaSiswa })
    indexDataUpdate = -1
  } else {
    const cariSiswa = dataSiswa.find(d => d.nomor === nomor)
    if (typeof cariSiswa !== 'undefined') {
      alert('Nomor Absen Sudah Digunakan')
      return
    }
    dataSiswa.push({ nomor, nama: namaSiswa });
  }
  simpanData(keySiswa, dataSiswa)
  tampilkanDataSiswa()
  elFormSiswa.reset()
}

elFormSiswa.addEventListener('submit', tambahSiswa)
