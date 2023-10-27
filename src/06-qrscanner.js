bMulaiScan.addEventListener('click', startQRScan)

function startQRScan() {
  console.log(JSON.stringify({ prosesScan }))
  if (prosesScan) {
    stopQRScan()
    return
  }
  bMulaiScan.innerHTML = 'Stop Pindai'
  prosesScan = true
  videoElement.setAttribute('height', '300')
  codeReader.decodeFromVideoDevice(null, videoElement, (result, err) => {
    if (result) {
      // Hasil pemindaian berhasil
      stopQRScan()
      const regex = /^\d+/
      const nomorAbsen = result.text.match(regex)
      if (nomorAbsen.length === 1) {
        tambahDataAbsen(nomorAbsen[0])
      }
    }

    if (err && !(err instanceof ZXing.NotFoundException)) {
      console.error(err)
    }
  });
}

function stopQRScan() {
  codeReader.reset();
  videoElement.setAttribute('height', '0')
  prosesScan = false
  bMulaiScan.innerHTML = 'Mulai Pindai'
}
