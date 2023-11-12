const elFormSiswa = document.getElementById('form-siswa')
const elFormAbsen = document.getElementById('form-absen')
const elNamaSiswa = document.getElementById('nama-siswa')
const elNomorAbsenSiswa = document.getElementById('nomor-absen-siswa')
const elNomorAbsen = document.getElementById('nomor-absen')
const elButtonSiswa = document.getElementById('tombol-siswa')
const elTabelSiswa = document.getElementById('data-siswa')
const elTabelAbsen = document.getElementById('data-absen')

const elButtonAbsen = document.getElementById('tombol-absen')
const elUploadFile = document.getElementById('upload')
const elQrCode = document.getElementById('area-cetak-qrcode')

const elHalaman = document.querySelectorAll('.halaman')
const elNavMenu = document.querySelectorAll(".menu-halaman")

const elKodeBaris = document.getElementById('kode-per-baris')
const elUkuranKode = document.getElementById('ukuran-kode')

const elTombolPindai = document.getElementById('tombol-pindai')
const elKamera = document.getElementById('kamera')

// template
const templateRowSiswa = elTabelSiswa.querySelector('tr')
const templateRowAbsen = elTabelAbsen.querySelector('tr')
const templateKartu = document.querySelector('.kartu-qr')

function elemenKartu(judul, elemen, ukuran) {
  const kartu = templateKartu.cloneNode(true)
  kartu.innerHTML = kartu.innerHTML
    .replace(/judul/g, judul)
    .replace(/100px/g, `${ukuran}px`)
  const lokasiKode = kartu.querySelector('.kode')
  const penggantiKode = lokasiKode.cloneNode(true)
  penggantiKode.appendChild(elemen)
  kartu.replaceChild(penggantiKode, lokasiKode)
  return kartu
}
