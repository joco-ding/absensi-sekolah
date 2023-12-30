const codeReader = new ZXing.BrowserQRCodeReader();
let sedangMemindai = false

function mulaiPindai() {
  if (sedangMemindai) {
    hentikanPindai()
    return
  }
  elTombolPindai.innerHTML = 'Hentikan Pindai'
  sedangMemindai = true
  elKamera.setAttribute('height', '300')
  codeReader.decodeFromVideoDevice(null, elKamera, (result, err) => {
    if (result) {
      hentikanPindai()
      const nomorAbsen = result.text.match(/^\d+/)
      if (nomorAbsen.length === 1) {
        tambahDataAbsen(Number(nomorAbsen[0]))
      }
    }

    if (err && !(err instanceof ZXing.NotFoundException)) {
      console.error(err)
    }
  });
}

function hentikanPindai() {
  codeReader.reset();
  elKamera.setAttribute('height', '0')
  sedangMemindai = false
  elTombolPindai.innerHTML = 'Mulai Pindai'
}

elTombolPindai.addEventListener('click', mulaiPindai)
