// Data siswa
const dataSiswa = [{ "nomor": "1", "nama": "Andi Rahmad" }, { "nomor": "2", "nama": "Budi Santoso" }, { "nomor": "3", "nama": "Candra Wijaya" }, { "nomor": "4", "nama": "Dian Sastrowardoyo" }, { "nomor": "5", "nama": "Eka Putri" }, { "nomor": "6", "nama": "Fajar Nugraha" }, { "nomor": "7", "nama": "Galih Pratama" }, { "nomor": "8", "nama": "Hana Safira" }, { "nomor": "9", "nama": "Indah Permata" }, { "nomor": "10", "nama": "Joko Widodo" }, { "nomor": "11", "nama": "Kurnia Dewi" }, { "nomor": "12", "nama": "Lina Sari" }, { "nomor": "13", "nama": "Mulyadi Tjandra" }, { "nomor": "14", "nama": "Novi Rahayu" }, { "nomor": "15", "nama": "Oka Wirya" }, { "nomor": "16", "nama": "Putri Ayu" }, { "nomor": "17", "nama": "Qory Sandioriva" }, { "nomor": "18", "nama": "Rizky Febian" }, { "nomor": "19", "nama": "Siti Nurhaliza" }, { "nomor": "20", "nama": "Tegar Putra" }, { "nomor": "21", "nama": "Umar Bakri" }, { "nomor": "22", "nama": "Vania Larissa" }, { "nomor": "23", "nama": "Wulan Guritno" }, { "nomor": "24", "nama": "Xaverius Rio" }, { "nomor": "25", "nama": "Yuni Shara" }, { "nomor": "26", "nama": "Zainal Abidin" }, { "nomor": "27", "nama": "Yeni Wahid" }];


// Fungsi untuk menghasilkan tanggal acak dalam rentang tertentu
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Fungsi untuk menghasilkan jam acak antara 06:00:00 dan 07:00:00
function randomTime() {
  const hour = 6; // Jam tetap 6
  const minute = Math.floor(Math.random() * 60);
  const second = Math.floor(Math.random() * 60);
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}

// Fungsi untuk menghasilkan rentang tanggal dari start hingga end
function getDatesInRange(startDate, endDate) {
  const date = new Date(startDate.getTime());
  const dates = [];

  while (date <= endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

const startDate = new Date("2023-09-01");
const endDate = new Date("2023-09-30");
const allDates = getDatesInRange(startDate, endDate);

// Membuat data absen
const dataAbsen = [];

allDates.forEach(date => {
  // Menghitung 90% dari total siswa
  const countToAbsen = Math.ceil(dataSiswa.length * 0.9);
  const shuffledStudents = [...dataSiswa].sort(() => 0.5 - Math.random());
  const selectedStudents = shuffledStudents.slice(0, countToAbsen);

  selectedStudents.forEach(student => {
    const formattedDate = date.toISOString().split('T')[0]; // Mengubah ke format YYYY-MM-DD

    dataAbsen.push({
      nomor: student.nomor,
      nama: student.nama,
      tanggal: formattedDate,
      jam: randomTime(),
    });
  });
});

console.log(JSON.stringify({ data: dataAbsen }));
