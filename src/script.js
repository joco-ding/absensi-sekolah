const elNamaSiswa = document.getElementById('nama-siswa');
const elJamMasuk = document.getElementById('jam-masuk');
const elButton = document.getElementById('tombol-tambah')
let indexDataUpdate = -1

function ambilData(key) {
  const dataString = localStorage.getItem(key)
  if (typeof dataString === 'undefined' || dataString === null) {
    return null
  }
  console.log(dataString)
  return JSON.parse(dataString).data
}

function simpanData(key, data) {
  const dataTersimpan = JSON.stringify({ data })
  console.log(dataTersimpan)
  localStorage.setItem(key, dataTersimpan)
}

let daftarSiswa = ambilData('siswa') || []
console.log(daftarSiswa)
elButton.addEventListener('click', tambahData);
const elemenTabel = document.getElementById('data-siswa');

function tampilkanData() {
  elemenTabel.innerHTML = '';
  const jumlahSiswa = daftarSiswa.length;
  for (let i = 0; i < jumlahSiswa; i++) {
    const item = daftarSiswa[i];
    const elemenbarisdata = document.createElement('tr');
    elemenbarisdata.innerHTML = `<td>
      <button type="button" onclick="hapusData(${i})" class="btn btn-danger">{' '}
      <button type="button" onclick="tampilkanUpdateData(${i})" class="btn btn-success">{' '}
        Hapus Data
      </button> ${item.nama}</td><td>${item.jam}</td>`;
    elemenTabel.appendChild(elemenbarisdata);
  }
}

function tampilkanUpdateData(z) {
  indexDataUpdate = z
  const dataUpdate = daftarSiswa[z]
  elNamaSiswa.value = dataUpdate.nama
  elJamMasuk.value = dataUpdate.jam
  elButton.innerText = 'Update Data'
}

function hapusData(z) {
  daftarSiswa.splice(z, 1)
  simpanData('siswa', daftarSiswa)
  tampilkanData()
}

function tambahData() {
  console.log('tombol tambah data di-klik');
  let namaSiswa = elNamaSiswa.value;
  let jamMasuk = elJamMasuk.value;
  if (namaSiswa === '' || jamMasuk === '') {
    alert('Mohon lengkapi isian!');
    return;
  }
  if (indexDataUpdate > 0) {
    indexDataUpdate = -1
    elButton.innerText = 'Tambah Data'
    daftarSiswa.splice(indexDataUpdate, 1, { nama: namaSiswa, jam: jamMasuk })
  } else {
    daftarSiswa.push({ nama: namaSiswa, jam: jamMasuk });
  }
  simpanData('siswa', daftarSiswa)
  console.log(JSON.stringify({ daftarSiswa }));
  tampilkanData()
}

tampilkanData()