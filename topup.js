async function topup() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        alert("Silakan login dahulu.");
        return;
    }

    const game = document.getElementById("game").value;
    const amount = document.getElementById("amount").value;
    const method = document.getElementById("method").value;

    if (!game || !amount || !method) {
        alert("Harap lengkapi semua data.");
        return;
    }

    const response = await fetch("backend/topup.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `user_id=${user.id}&game=${game}&amount=${amount}&method=${method}`
    });

    const result = await response.json();
    alert(result.message);
    if (result.status === "success") {
        window.location.href = "dashboard.html";
    }
}