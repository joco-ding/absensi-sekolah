let dataSiswa=ambilData("siswa")||[],dataAbsen=ambilData("absen")||[],indexDataUpdate=-1;const Sheet1="Data Siswa",Sheet2="Data Absen";let KodeperBaris=3,UkuranKode=100,Kolom="col-4";const codeReader=new ZXing.BrowserQRCodeReader;function ambilData(e){const t=localStorage.getItem(e);return typeof t=="undefined"||t===null?null:JSON.parse(t).data}function simpanData(e,t){const n=JSON.stringify({data:t});console.log(n),localStorage.setItem(e,n)}function delay(e){return new Promise(t=>setTimeout(t,e))}function getKolom(e){switch(e){case 1:return 12;case 2:return 6;case 3:return 4;case 4:return 3;case 6:return 2;case 12:return 1;default:return-1}}const elBody=document.getElementById("body"),elFormSiswa=document.getElementById("form-siswa"),elFormAbsen=document.getElementById("form-absen"),elNamaSiswa=document.getElementById("nama-siswa"),elNomorAbsenSiswa=document.getElementById("nomor-absen-siswa"),elNomorAbsen=document.getElementById("nomor-absen"),elButtonSiswa=document.getElementById("tombol-siswa"),elButtonAbsen=document.getElementById("tombol-absen"),elUploadFile=document.getElementById("upload"),elModalTitle=document.getElementById("modal-title"),elModalBody=document.getElementById("modal-body"),elQrCode=document.getElementById("area-cetak-qrcode"),elHalaman=document.querySelectorAll(".halaman"),elNavMenu=document.querySelectorAll(".menu-halaman"),elKodeBaris=document.getElementById("kode-per-baris"),elUkuranKode=document.getElementById("ukuran-kode"),bMulaiScan=document.getElementById("mulai-scan"),videoElement=document.getElementById("scanner"),hasilElement=document.getElementById("hasil");function buatElCard(e,t,n){const o=document.createElement("div"),s=document.createElement("div");s.setAttribute("class","mx-auto"),s.setAttribute("style",`max-width: ${n}px`),s.appendChild(t);const i=document.createElement("div");return i.setAttribute("class","p-0"),i.innerHTML=`<div class="w-100 mx-auto" style="max-width: ${n}px"><p class="text-center text-truncate"><small>${e}</small></p></div>`,o.appendChild(s),o.appendChild(i),o}const elemenTabel=document.getElementById("data-absen");function tampilkanDataAbsen(){elemenTabel.innerHTML="";const e=dataAbsen.length;for(let n=0;n<e;n++){const t=dataAbsen[n],s=dataSiswa.find(e=>e.nomor===t.nomor);if(typeof s=="undefined")continue;const o=document.createElement("tr");o.innerHTML=`<td>${t.nomor}</td><td>${s.nama}</td><td>${t.hari}</td><td>${t.jam}</td>`,elemenTabel.appendChild(o)}}function tambahDataAbsen(e){if(e===""){alert("Mohon lengkapi isian!");return}const n=dataSiswa.find(t=>t.nomor===e);if(typeof n=="undefined"){alert(`Data Siswa dengan Nomor Absen ${e} tidak ditemukan!`);return}const t=new Date,i=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),c=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0"),d=String(t.getSeconds()).padStart(2,"0"),s=`${i}-${a}-${r}`,u=`${c}:${l}:${d}`,o=dataAbsen.find(t=>t.hari===s&&t.nomor===e);if(console.log(JSON.stringify({cariAbsen:o})),typeof o!="undefined"){alert(`${n.nama} sudah absen hari ini`);return}dataAbsen.push({nomor:e,hari:s,jam:u}),simpanData("absen",dataAbsen),console.log(JSON.stringify({dataAbsen})),tampilkanDataAbsen(),elFormAbsen.reset()}tampilkanDataAbsen();function downloadExcel(){const t=XLSX.utils.book_new(),s=XLSX.utils.json_to_sheet(dataSiswa),n=[];for(let t=0;t<dataAbsen.length;t++){const e=dataAbsen[t],s=dataSiswa.find(t=>t.nomor===e.nomor);if(typeof s=="undefined")continue;n.push({nomor:e.nomor,nama:s.nama,hari:e.hari,jam:e.jam})}const o=XLSX.utils.json_to_sheet(n);XLSX.utils.book_append_sheet(t,s,Sheet1),XLSX.utils.book_append_sheet(t,o,Sheet2);const i=XLSX.write(t,{bookType:"xlsx",type:"array"}),a=new Blob([new Uint8Array(i)],{type:"application/octet-stream"}),e=document.createElement("a");e.href=URL.createObjectURL(a),e.download="absen.xlsx",document.body.appendChild(e),e.click(),document.body.removeChild(e)}function xlsxToStore(){const t=document.getElementById("upload"),n=t.files[0],e=new FileReader;e.onload=function(e){const n=e.target.result,t=XLSX.read(n,{type:"binary"}),s=t.Sheets[Sheet1],o=t.Sheets[Sheet2];dataSiswa=XLSX.utils.sheet_to_json(s),dataAbsen=XLSX.utils.sheet_to_json(o),simpanData("siswa",dataSiswa),simpanData("absen",dataAbsen),tampilkanDataSiswa(),tampilkanDataAbsen()},e.readAsBinaryString(n)}elNavMenu.forEach(e=>{e.addEventListener("click",bukaHalaman)});function bukaHalaman(e){e.preventDefault(),elNavMenu.forEach(e=>{e.classList.remove("active")}),this.classList.add("active");const t=this.getAttribute("menu");elHalaman.forEach(e=>{e.classList.add("d-none")}),document.getElementById(t).classList.remove("d-none"),elBody.classList.remove("align-items-center","d-flex"),t==="home-page"&&elBody.classList.add("align-items-center","d-flex")}function buatKodeQR(e){elModalTitle.innerText="Kode QR",elModalBody.innerHTML="";const t=document.createElement("div");t.setAttribute("class","m-auto"),t.setAttribute("style","width: 300px"),new QRCode(t,{text:e,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H}),elModalBody.innerHTML="",elModalBody.appendChild(t)}function tampilkanQrCode(){elQrCode.innerHTML="";let e=0;const t=dataSiswa.length;let n=!0;for(;n;){const s=document.createElement("div");s.setAttribute("class","row page-break-inside-avoid");for(let i=0;i<KodeperBaris;i++){console.log(JSON.stringify({index:e,jumlahSiswa:t}));const o=document.createElement("div");if(o.setAttribute("class",Kolom),t>e){const s=dataSiswa[e],i=s.nama,a=s.nomor,t=`${a}-${i}`;console.log(JSON.stringify({kode:t}));const n=document.createElement("div");n.setAttribute("class","m-auto mt-3"),new QRCode(n,{text:t,width:UkuranKode,height:UkuranKode,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H});const r=buatElCard(t,n,UkuranKode);o.appendChild(r)}else n=!1;s.appendChild(o),e++}elQrCode.appendChild(s)}}function cetakQRCode(){document.body.classList.add("p-0","m-0"),document.getElementById("qrcode-page").classList.remove("mt-80"),window.print(),document.body.classList.remove("p-0","m-0"),document.getElementById("qrcode-page").classList.add("mt-80")}async function fKolom(e){try{if(e<1){await delay(100),elKodeBaris.value=1;return}if(e>12){await delay(100),elKodeBaris.value=12;return}const t=getKolom(e);if(t<0){await delay(100),e--,elKodeBaris.value=e,fKolom(e);return}console.log(JSON.stringify({jumlahKolom:t})),KodeperBaris=e,Kolom=`col-${t}`,tampilkanQrCode()}catch(e){console.error(e)}}elKodeBaris.addEventListener("change",e=>{console.log(e.currentTarget.value);const t=parseInt(e.currentTarget.value,10);fKolom(t)});async function fPixel(e){try{if(e<20){await delay(100),elUkuranKode.value=20;return}if(e>300){await delay(100),elUkuranKode.value=300;return}UkuranKode=e,tampilkanQrCode()}catch(e){console.error(e)}}elUkuranKode.addEventListener("change",async e=>{console.log(e.currentTarget.value);const t=parseInt(e.currentTarget.value,10);fPixel(t)}),bMulaiScan.addEventListener("click",startQRScan);function startQRScan(){videoElement.setAttribute("height","300"),codeReader.decodeFromVideoDevice(null,videoElement,(e,t)=>{if(e){console.log(e.text),hasilElement.innerText=e.text,stopQRScan();const n=/^\d+/,t=e.text.match(n);t.length===1&&tambahDataAbsen(t[0])}t&&!(t instanceof ZXing.NotFoundException)&&console.error(t)})}function stopQRScan(){codeReader.reset(),videoElement.setAttribute("height","0")}elButtonSiswa.addEventListener("click",tambahSiswa);const elTabelSiswa=document.getElementById("data-siswa");function tampilkanDataSiswa(){tampilkanQrCode(),elTabelSiswa.innerHTML="";const e=dataSiswa.length;for(let t=0;t<e;t++){const n=dataSiswa[t],s=document.createElement("tr");s.innerHTML=`
    <td class="text-center">
      ${n.nomor} 
      <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#kodeQRModal" onclick="buatKodeQR('${n.nomor}-${n.nama}')">
        <i class="bi bi-qr-code"></i>
      </button>
    </td>
    <td>${n.nama}</td>
    <td class="text-center">
      <button type="button" onclick="tampilkanUpdateDataSiswa(${t})" class="btn btn-link">
      <i class="bi bi-pencil-square"></i>
      </button>
      <button type="button" onclick="hapusDataSiswa(${t})" class="btn btn-link">
      <i class="bi bi-trash3"></i>
      </button>
    </td>`,elTabelSiswa.appendChild(s)}}function tampilkanUpdateDataSiswa(e){indexDataUpdate=e;const t=dataSiswa[e];elNamaSiswa.value=t.nama,elNomorAbsenSiswa.value=t.nomor,elButtonSiswa.innerText="Update Data"}function hapusDataSiswa(e){dataSiswa.splice(e,1),simpanData("siswa",dataSiswa),tampilkanDataSiswa()}function tambahSiswa(){console.log("tombol tambah data di-klik");let t=elNamaSiswa.value,e=elNomorAbsenSiswa.value;if(t===""||e===""){alert("Mohon lengkapi isian!");return}if(indexDataUpdate>-1)elButtonSiswa.innerText="Tambah Data",dataSiswa.splice(indexDataUpdate,1,{nomor:e,nama:t}),indexDataUpdate=-1;else{const n=dataSiswa.find(t=>t.nomor===e);if(typeof n!="undefined"){alert("Nomor Absen Sudah Digunakan");return}dataSiswa.push({nomor:e,nama:t})}simpanData("siswa",dataSiswa),console.log(JSON.stringify({dataSiswa})),tampilkanDataSiswa(),elFormSiswa.reset()}tampilkanDataSiswa()