function ambilData(key) {
  const dataString = localStorage.getItem(key)
  if (typeof dataString === 'undefined' || dataString === null) {
    return null
  }
  console.log(dataString)
  return JSON.parse(dataString).data
}

function simpanData(key, data) {
  const dataTersimpan = JSON.stringify({data})
  console.log(dataTersimpan)
  localStorage.setItem(key, dataTersimpan)
}

let daftarSiswa = ambilData('siswa') || []
console.log(daftarSiswa)
document.getElementById('tombol-tambah').addEventListener('click', tambahData);
const elemenTabel = document.getElementById('data-siswa');

function tampilkanData() {
  elemenTabel.innerHTML = '';
  const jumlahSiswa = daftarSiswa.length;
  for (let i = 0; i < jumlahSiswa; i++) {
    const item = daftarSiswa[i];
    const elemenbarisdata = document.createElement('tr');
    elemenbarisdata.innerHTML = `<td>
      <button type="button" onclick="hapusData(${i})" class="btn btn-danger">
        Hapus Data
      </button> ${item.nama}</td><td>${item.jam}</td>`;
    elemenTabel.appendChild(elemenbarisdata);
  }
}

function hapusData(z) {
  daftarSiswa.splice(z, 1)
  simpanData('siswa', daftarSiswa)
  tampilkanData()
}

function tambahData() {
  console.log('tombol tambah data di-klik');
  let namaSiswa = document.getElementById('nama-siswa').value;
  let jamMasuk = document.getElementById('jam-masuk').value;
  if (namaSiswa === '' || jamMasuk === '') {
    alert('Mohon lengkapi isian!');
    return;
  }
  daftarSiswa.push({ nama: namaSiswa, jam: jamMasuk });
  simpanData('siswa', daftarSiswa)
  console.log(JSON.stringify({ daftarSiswa }));
  tampilkanData()
}

tampilkanData()