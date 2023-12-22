function ambilData(key) {
  try {
    const dataString = localStorage.getItem(key)
    if (typeof dataString === 'string') {
      return JSON.parse(dataString).data
    }
  } catch (error) {
    console.log("Terjadi kesalahan: " + error.message)
  }
  return null
}

function simpanData(key, data) {
  try {
    const dataTersimpan = JSON.stringify({ data })
    localStorage.setItem(key, dataTersimpan)
  } catch (error) {
    console.log("Terjadi kesalahan: " + error.message)
  }
}

const keySiswa = 'data-siswa'
const keyAbsen = 'data-absen'

let dataSiswa = ambilData(keySiswa) || []
let dataAbsen = ambilData(keyAbsen) || []

let indexDataUpdate = -1

const Sheet1 = 'Data Siswa'
const Sheet2 = 'Data Absen'

let KodeperBaris = 3
let UkuranKode = 100
let Kolom = 'col-4'
let sedangMemindai = false

const codeReader = new ZXing.BrowserQRCodeReader();

function getKolom(jumlah) {
  switch (jumlah) {
    case 1:
      return 12;
    case 2:
      return 6;
    case 3:
      return 4;
    case 4:
      return 3;
    case 6:
      return 2;
    case 12:
      return 1;
    default:
      return -1;
  }
}
