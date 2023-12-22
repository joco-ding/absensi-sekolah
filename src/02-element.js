const elMenu = document.querySelectorAll(".nav-link")
const elHalaman = document.querySelectorAll('.halaman')

const elFormSiswa = document.getElementById('form-siswa')
const elNomorAbsenSiswa = document.getElementById('nomor-absen-siswa')
const elNamaSiswa = document.getElementById('nama-siswa')
const elButtonSiswa = document.getElementById('tombol-siswa')
const elTabelSiswa = document.getElementById('data-siswa')

const elKamera = document.getElementById('kamera')
const elTombolPindai = document.getElementById('tombol-pindai')
const elTabelAbsen = document.getElementById('data-absen')

const elKodeBaris = document.getElementById('kode-per-baris')
const elUkuranKode = document.getElementById('ukuran-kode')
const elQrCode = document.getElementById('area-cetak-qrcode')

// template
const templateRowSiswa = elTabelSiswa.querySelector('tr')
const templateRowAbsen = elTabelAbsen.querySelector('tr')
const templateKartu = document.querySelector('.kartu-qr')

function elemenKartu(teksKode, elemen, ukuran) {
  const kartu = templateKartu.cloneNode(true)
  kartu.innerHTML = kartu.innerHTML
    .replace(/teksKode/g, teksKode)
    .replace(/100px/g, `${ukuran}px`)
  const lokasiKode = kartu.querySelector('.kode')
  const penggantiKode = lokasiKode.cloneNode(true)
  penggantiKode.appendChild(elemen)
  kartu.replaceChild(penggantiKode, lokasiKode)
  return kartu
}
