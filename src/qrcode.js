
function buatKodeQR(kode) {
  elModalTitle.innerText = 'Kode QR'
  elModalBody.innerHTML = ''
  const bodyQR = document.createElement('div');
  bodyQR.setAttribute('class', 'm-auto')
  bodyQR.setAttribute('style', 'width: 300px')

  const qrcode = new QRCode(bodyQR, {
    text: kode,
    width: 300,
    height: 300,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
  elModalBody.innerHTML = ''
  elModalBody.appendChild(bodyQR)
}

function tampilkanQrCode() {
  elQrCode.innerHTML = ''
  let index = 0
  const jumlahSiswa = dataSiswa.length
  let _loop = true
  while (_loop) {
    const elRow = document.createElement('div')
    elRow.setAttribute('class', 'row')
    for (let j = 0; j < 3; j++) {
      console.log(JSON.stringify({ index, jumlahSiswa }))
      const elCol = document.createElement('div')
      elCol.setAttribute('class', 'col-4')
      if (jumlahSiswa > index) {
        const data = dataSiswa[index]
        const nama = data.nama
        const nomor = data.nomor
        const kode = `${nomor}-${nama}`
        console.log(JSON.stringify({ kode }))
        // elCol.innerHTML = kode
        const elTempQR = document.createElement('div')
        elTempQR.setAttribute('class', 'm-auto mt-3')
        new QRCode(elTempQR, {
          text: kode,
          width: 100,
          height: 100,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
        const elTempQRCode = buatElCard(kode, elTempQR)
        elCol.appendChild(elTempQRCode)
      } else {
        _loop = false
      }
      elRow.appendChild(elCol)
      index++
    }
    elQrCode.appendChild(elRow)
  }
}