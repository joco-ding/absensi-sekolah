
// elemen
const elBody = document.getElementById("body")

const elFormSiswa = document.getElementById('form-siswa')
const elFormAbsen = document.getElementById('form-absen')
const elNamaSiswa = document.getElementById('nama-siswa')
const elNomorAbsenSiswa = document.getElementById('nomor-absen-siswa')
const elNomorAbsen = document.getElementById('nomor-absen')
const elButtonSiswa = document.getElementById('tombol-siswa')
const elButtonAbsen = document.getElementById('tombol-absen')
const elUploadFile = document.getElementById('upload')
const elModalTitle = document.getElementById('modal-title')
const elModalBody = document.getElementById('modal-body')
const elQrCode = document.getElementById('area-cetak-qrcode')

const elHalaman = document.querySelectorAll('.halaman')
const elNavMenu = document.querySelectorAll(".menu-halaman")

function buatElCard(title, element) {
  const elCard = document.createElement('div')
  elCard.setAttribute('class', 'card d-flex')
  const elCardBody = document.createElement('div')
  elCardBody.setAttribute('class', 'card-body')
  elCardBody.innerHTML=`<p class="card-text text-center"><small>${title}</small></p>`
  elCard.appendChild(element)
  elCard.appendChild(elCardBody)
  return elCard
}