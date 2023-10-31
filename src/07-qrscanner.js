function mulaiPindai() {
  if (sedangMemindai) {
    hentikanPindai()
    return
  }
  bMulaiScan.innerHTML = 'Hentikan Pindai'
  sedangMemindai = true
  videoElement.setAttribute('height', '300')
  codeReader.decodeFromVideoDevice(null, videoElement, (result, err) => {
    if (result) {
      hentikanPindai()
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

function hentikanPindai() {
  codeReader.reset();
  videoElement.setAttribute('height', '0')
  sedangMemindai = false
  bMulaiScan.innerHTML = 'Mulai Pindai'
}

bMulaiScan.addEventListener('click', mulaiPindai)
