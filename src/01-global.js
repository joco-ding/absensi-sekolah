

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

function ambilWaktu() {
  const saatini = new Date()
  const tahun = saatini.getFullYear()
  const bulan = String(saatini.getMonth() + 1).padStart(2, '0')
  const tanggal = String(saatini.getDate()).padStart(2, '0')
  const jam = String(saatini.getHours()).padStart(2, '0')
  const menit = String(saatini.getMinutes()).padStart(2, '0')
  const detik = String(saatini.getSeconds()).padStart(2, '0')

  const tanggalMasuk = `${tahun}-${bulan}-${tanggal}`
  const jamMasuk = `${jam}:${menit}:${detik}`

  return { tanggal: tanggalMasuk, jam: jamMasuk }
}

const keySiswa = 'data-siswa'
const keyAbsen = 'data-absen'

let dataSiswa = [{ nomor: 1, nama: 'Adam' }]
let dataAbsen = [{ nomor: 1, tanggal: ambilWaktu().tanggal, jam: ambilWaktu().jam }]

dataSiswa = ambilData(keySiswa) || []
dataAbsen = ambilData(keyAbsen) || []

let indexDataUpdate = -1

const Sheet1 = 'Data Siswa'
const Sheet2 = 'Data Absen'

let KodeperBaris = 3
let UkuranKode = 100


