async function registerUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Semua kolom harus diisi!");
        return;
    }

    const response = await fetch("backend/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `name=${name}&email=${email}&password=${password}`
    });

    const result = await response.json();
    alert(result.message);
    if (result.status === "success") {
        window.location.href = "login.html";
    }
}

async function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("backend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${email}&password=${password}`
    });

    const result = await response.json();
    if (result.status === "success") {
        localStorage.setItem("user", JSON.stringify(result.user));
        window.location.href = "dashboard.html";
    } else {
        alert(result.message);
    }
}