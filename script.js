function bukaUndangan() {
    const cover =
    document.getElementById("cover");
    const isi =
    document.getElementById("isi");

    cover.classList.remove("d-flex");
    cover.classList.add("d-none");
    isi.classList.remove("d-none")
}

const tanggalPernikahan = new Date("2026-11-15T09:00:00").getTime();

setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tanggalPernikahan - sekarang;

  if (selisih <= 0) {
    document.getElementById("countdown").innerText = "Hari bahagia telah tiba!";
    return;
  }

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerText =
    hari + " hari " + jam + " jam " + menit + " menit " + detik + " detik";
}, 1000);

// Simpan dan tampilkan ucapan di localStorage
document.getElementById("formUcapan").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;

  const ucapanBaru = { nama: nama, pesan: pesan };
  const data = JSON.parse(localStorage.getItem("ucapan") || "[]");
  data.push(ucapanBaru);
  localStorage.setItem("ucapan", JSON.stringify(data));

  tampilkanUcapan();
  this.reset();
});

function tampilkanUcapan() {
  const data = JSON.parse(localStorage.getItem("ucapan") || "[]");
  const daftar = document.getElementById("daftarUcapan");
  daftar.innerHTML = "";

  data.forEach(function (item) {
    const li = document.createElement("li");
    li.className = "list-group-item text-start";
    li.innerHTML = "<strong>" + item.nama + "</strong><br>" + item.pesan;
    daftar.appendChild(li);
  });
}

tampilkanUcapan();