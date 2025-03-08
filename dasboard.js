async function loadDashboard() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        alert("Silakan login terlebih dahulu!");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("username").innerText = user.name;

    // Ambil saldo user
    const saldoResponse = await fetch(`backend/get_saldo.php?user_id=${user.id}`);
    const saldoResult = await saldoResponse.json();
    document.getElementById("saldo").innerText = saldoResult.balance;

    // Ambil transaksi user
    const transaksiResponse = await fetch(`backend/transactions.php?user_id=${user.id}`);
    const transaksiResult = await transaksiResponse.json();

    const riwayatEl = document.getElementById("riwayat-transaksi");
    riwayatEl.innerHTML = transaksiResult.transactions.length ? "" : "<tr><td colspan='4'>Belum ada transaksi</td></tr>";

    transaksiResult.transactions.forEach(t => {
        const statusClass = t.status === "Sukses" ? "success" : t.status === "Pending" ? "pending" : "failed";
        const row = `<tr class="${statusClass}">
            <td>${t.game}</td>
            <td>${t.amount}</td>
            <td>${t.method}</td>
            <td>${t.status}</td>
        </tr>`;
        riwayatEl.innerHTML += row;
    });

    checkForNotifications(transaksiResult.transactions);
}

// Cek jika ada transaksi baru yang selesai
function checkForNotifications(transactions) {
    const lastStatus = localStorage.getItem("lastTransactionStatus") || "";
    const lastTransaction = transactions[0]?.status || "";

    if (lastTransaction !== lastStatus && lastTransaction === "Sukses") {
        alert("Transaksi Anda telah berhasil!");
    }

    localStorage.setItem("lastTransactionStatus", lastTransaction);
}

document.addEventListener("DOMContentLoaded", loadDashboard);