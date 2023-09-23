function downloadExcel() {

  // Membuat workbook
  const wb = XLSX.utils.book_new();

  // Mengkonversi data ke worksheet
  const wsSiswa = XLSX.utils.json_to_sheet(dataSiswa)
  const tempDataAbsen = []
  for (let z = 0; z < dataAbsen.length; z++) {
    const element = dataAbsen[z];

    const cariSiswa = dataSiswa.find(d => d.nomor === element.nomor)
    if (typeof cariSiswa === 'undefined') continue

    tempDataAbsen.push({ nomor: element.nomor, nama: cariSiswa.nama, hari: element.hari, jam: element.jam })
  }
  
  const wsAbsen = XLSX.utils.json_to_sheet(tempDataAbsen)

  // Menambahkan worksheet ke workbook
  XLSX.utils.book_append_sheet(wb, wsSiswa, "Data Siswa");
  XLSX.utils.book_append_sheet(wb, wsAbsen, "Data Absen");

    // Menggunakan write untuk mendapatkan data dalam bentuk array
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // Mengkonversi data array ke blob
    const blob = new Blob([new Uint8Array(wbout)], { type: 'application/octet-stream' });

    // Membuat link unduhan dan mengkliknya untuk mengunduh
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'absen.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
