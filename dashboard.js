document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        alert("Silakan login terlebih dahulu!");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("username").innerText = user.name;
    document.getElementById("saldo").innerText = localStorage.getItem("saldo") || 0;

    const transaksi = JSON.parse(localStorage.getItem("transaksi")) || [];
    const riwayatEl = document.getElementById("riwayat-transaksi");
    riwayatEl.innerHTML = transaksi.length ? "" : "<tr><td colspan='4'>Belum ada transaksi</td></tr>";

    transaksi.forEach(t => {
        const row = `<tr>
            <td>${t.game}</td>
            <td>${t.jumlah}</td>
            <td>${t.metode}</td>
            <td>${t.status}</td>
        </tr>`;
        riwayatEl.innerHTML += row;
    });
});

function withdraw() {
    alert("Fitur tarik saldo belum tersedia.");
}

function logout() {
    localStorage.removeItem("user");
    alert("Anda telah logout.");
    window.location.href = "login.html";
}