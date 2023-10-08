bMulaiScan.addEventListener('click', startQRScan)

function startQRScan() {
  codeReader.decodeFromVideoDevice(null, videoElement, (result, err) => {
    if (result) {
      // Hasil pemindaian berhasil
      console.log(result.text);
      hasilElement.innerText = result.text;
      codeReader.reset();
    }

    if (err && !(err instanceof ZXing.NotFoundException)) {
      console.error(err);
    }
  });
}
