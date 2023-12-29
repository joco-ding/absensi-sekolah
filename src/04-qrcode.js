function tampilkanQrCode() {
  elQrCode.innerHTML = ''
  let index = 0
  const jumlahSiswa = dataSiswa.length
  let _loop = true
  while (_loop) {
    const elRow = document.createElement('div')
    elRow.className = 'row'
    for (let j = 0; j < KodeperBaris; j++) {
      const elCol = document.createElement('div')
      elCol.className = 'col'
      if (jumlahSiswa > index) {
        const item = dataSiswa[index]
        const teksKode = `${item.nomor}-${item.nama}`
        const elTempQR = document.createElement('div')
        elTempQR.className = 'mt-3'
        new QRCode(elTempQR, {
          text: teksKode,
          width: UkuranKode,
          height: UkuranKode,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
        const elDataCol = templateKartu.cloneNode(true)
        elDataCol.innerHTML = elDataCol.innerHTML
          .replace(/teksKode/g, teksKode)
          .replace(/100px/g, `${UkuranKode}px`)
        const lokasiKode = elDataCol.querySelector('.kode')
        const penggantiKode = lokasiKode.cloneNode(true)
        penggantiKode.appendChild(elTempQR)
        elDataCol.replaceChild(penggantiKode, lokasiKode)

        elCol.appendChild(elDataCol)
      } else {
        _loop = false
      }
      elRow.appendChild(elCol)
      index++
    }
    elQrCode.appendChild(elRow)
  }
}

elKodeBaris.addEventListener('change', (e) => {
  try {
    const tempKPB = Number(e.currentTarget.value)
    if (tempKPB < 1) {
      elKodeBaris.value = 1
      return
    } else if (tempKPB > 12) {
      elKodeBaris.value = 12
      return
    }
    KodeperBaris = tempKPB
    tampilkanQrCode()
  } catch (error) {
    console.log("Terjadi kesalahan: " + error.message)
  }
})

elUkuranKode.addEventListener('change', (e) => {
  try {
    const ukuran = Number(e.currentTarget.value)
    if (ukuran < 20) {
      elUkuranKode.value = 20
      return
    } else if (ukuran > 300) {
      elUkuranKode.value = 300
      return
    }
    UkuranKode = ukuran
    tampilkanQrCode()
  } catch (error) {
    console.log("Terjadi kesalahan: " + error.message)
  }
})