function tampilkanQrCode() {
  elQrCode.innerHTML = ''
  let index = 0
  const jumlahSiswa = dataSiswa.length
  let _loop = true
  while (_loop) {
    const elRow = document.createElement('div')
    elRow.setAttribute('class', 'row page-break-inside-avoid')
    for (let j = 0; j < KodeperBaris; j++) {
      const elCol = document.createElement('div')
      elCol.setAttribute('class', Kolom)
      if (jumlahSiswa > index) {
        const data = dataSiswa[index]
        const nama = data.nama
        const nomor = data.nomor
        const kode = `${nomor}-${nama}`
        const elTempQR = document.createElement('div')
        elTempQR.setAttribute('class', 'mt-3')
        new QRCode(elTempQR, {
          text: kode,
          width: UkuranKode,
          height: UkuranKode,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
        const elTempQRCode = elemenKartu(kode, elTempQR, UkuranKode)
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

function ubahKolom(tempKPB) {
  if (tempKPB < 1) {
    elKodeBaris.value = 1
    return
  } else if (tempKPB > 12) {
    elKodeBaris.value = 12
    return
  }

  const jumlahKolom = getKolom(tempKPB)
  if (jumlahKolom < 0) {
    tempKPB--
    elKodeBaris.value = tempKPB
    ubahKolom(tempKPB)
    return
  }
  KodeperBaris = tempKPB
  Kolom = `col-${jumlahKolom}`
  tampilkanQrCode()
}

elKodeBaris.addEventListener('change', (e) => {
  try {
    const tempKPB = parseInt(e.currentTarget.value, 10)
    ubahKolom(tempKPB)
  } catch (error) {
    console.log("Terjadi kesalahan: " + error.message)
  }
})

function ubahPixel(ukuran) {
  if (ukuran < 20) {
    elUkuranKode.value = 20
    return
  } else if (ukuran > 300) {
    elUkuranKode.value = 300
    return
  }
  UkuranKode = ukuran
  tampilkanQrCode()
}

elUkuranKode.addEventListener('change', (e) => {
  try {
    const ukuran = parseInt(e.currentTarget.value, 10)
    ubahPixel(ukuran)
  } catch (error) {
    console.log("Terjadi kesalahan: " + error.message)
  }
})