document.addEventListener("DOMContentLoaded", function() {
    const transaksi = JSON.parse(localStorage.getItem("transaksi")) || [];
    const daftarEl = document.getElementById("daftar-transaksi");
    daftarEl.innerHTML = transaksi.length ? "" : "<tr><td colspan='5'>Belum ada transaksi</td></tr>";

    transaksi.forEach((t, index) => {
        const row = `<tr>
            <td>${t.pengguna}</td>
            <td>${t.game}</td>
            <td>${t.jumlah}</td>
            <td>${t.status}</td>
            <td><button onclick="prosesTransaksi(${index})">Proses</button></td>
        </tr>`;
        daftarEl.innerHTML += row;
    });
});

function prosesTransaksi(index) {
    let transaksi = JSON.parse(localStorage.getItem("transaksi")) || [];
    transaksi[index].status = "Sukses";
    localStorage.setItem("transaksi", JSON.stringify(transaksi));
    alert("Transaksi berhasil diproses!");
    location.reload();
}

function logout() {
    localStorage.removeItem("admin");
    alert("Anda telah logout.");
    window.location.href = "login.html";
}