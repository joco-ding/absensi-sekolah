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


