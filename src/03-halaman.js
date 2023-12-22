elMenu.forEach(element => {
  element.addEventListener('click', bukaHalaman);
});

function bukaHalaman(event) {
  event.preventDefault()

  const dataMenu = this.getAttribute('halaman');
  switch (dataMenu) {
    case 'qrcode-page':
      tampilkanQrCode()
      break;
    case 'siswa-page':
      tampilkanDataSiswa()
      break
    case 'absen-page':
      tampilkanDataAbsen()
      break
    default:
      break;
  }

  elMenu.forEach(element => {
    element.classList.remove('active')
  });
  this.classList.add('active')

  elHalaman.forEach(element => {
    element.classList.add('d-none')
  })
  document.getElementById(dataMenu).classList.remove('d-none')
}