elButtonSiswa.addEventListener('click', tambahSiswa);
const elTabelSiswa = document.getElementById('data-siswa');

function tampilkanDataSiswa() {
  elTabelSiswa.innerHTML = '';
  const jumlahSiswa = dataSiswa.length;
  for (let i = 0; i < jumlahSiswa; i++) {
    const item = dataSiswa[i];
    const elemenbarisdata = document.createElement('tr');
    elemenbarisdata.innerHTML = `
    <td class="text-center">
      ${item.nomor} 
      <button type="button" class="btn btn-link">
        <i class="bi bi-qr-code"></i>
      </button>
    </td>
    <td>${item.nama}</td><td>${item.kelas}</td>
    <td class="text-center">
      <button type="button" onclick="tampilkanUpdateDataSiswa(${i})" class="btn btn-link">
      <i class="bi bi-pencil-square"></i>
      </button>
      <button type="button" onclick="hapusDataSiswa(${i})" class="btn btn-link">
      <i class="bi bi-trash3"></i>
      </button>
    </td>`;
    elTabelSiswa.appendChild(elemenbarisdata);
  }
}

function tampilkanUpdateDataSiswa(z) {
  indexDataUpdate = z
  const dataUpdate = dataSiswa[z]
  elNamaSiswa.value = dataUpdate.nama
  elNomorAbsenSiswa.value = dataUpdate.nomor
  elKelas.value = dataUpdate.kelas
  elButton.innerText = 'Update Data'
}

function hapusDataSiswa(z) {
  dataSiswa.splice(z, 1)
  simpanData('siswa', dataSiswa)
  tampilkanDataSiswa()
}

function tambahSiswa() {
  console.log('tombol tambah data di-klik');
  let namaSiswa = elNamaSiswa.value;
  let nomor = elNomorAbsenSiswa.value;
  let kelas = elKelas.value;
  if (namaSiswa === '' || nomor === '' || kelas === '') {
    alert('Mohon lengkapi isian!')
    return
  }
  const cariSiswa = dataSiswa.find(d => d.nomor === nomor)
  if (typeof cariSiswa !== 'undefined') {
    alert('Nomor Absen Sudah Digunakan')
    return
  }
  if (indexDataUpdate > 0) {
    elButton.innerText = 'Tambah Data'
    dataSiswa.splice(indexDataUpdate, 1, { nomor, nama: namaSiswa, kelas })
    indexDataUpdate = -1
  } else {
    dataSiswa.push({ nomor, nama: namaSiswa, kelas });
  }
  simpanData('siswa', dataSiswa)
  console.log(JSON.stringify({ dataSiswa }));
  tampilkanDataSiswa()
  elFormSiswa.reset()
}

tampilkanDataSiswa()