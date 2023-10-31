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
const elModalTitle = document.getElementById('modal-title')
const elModalBody = document.getElementById('modal-body')
const elQrCode = document.getElementById('area-cetak-qrcode')

const elHalaman = document.querySelectorAll('.halaman')
const elNavMenu = document.querySelectorAll(".menu-halaman")

const elKodeBaris = document.getElementById('kode-per-baris')
const elUkuranKode = document.getElementById('ukuran-kode')

const bMulaiScan = document.getElementById('mulai-scan')
const videoElement = document.getElementById('scanner')

// template
const templateRowSiswa = elTabelSiswa.querySelector('tr')
const templateRowAbsen = elTabelAbsen.querySelector('tr')

function elemenKartu(judul, elemen, ukuran) {
  const elemenUtama = document.createElement('div')
  const elemenKode = document.createElement('div')
  const elemenBodi = document.createElement('div')
  elemenKode.setAttribute('class', 'mx-auto')
  elemenKode.setAttribute('style',`max-width: ${ukuran}px`)
  elemenKode.appendChild(elemen)
  elemenBodi.setAttribute('class', 'p-0')
  elemenBodi.innerHTML=`<div class="mx-auto" style="max-width: ${ukuran}px"><p class="text-center text-truncate"><small>${judul}</small></p></div>`
  elemenUtama.appendChild(elemenKode)
  elemenUtama.appendChild(elemenBodi)
  return elemenUtama
}