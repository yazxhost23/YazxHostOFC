<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "topup_db
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
    
define("TRIPAY_API_KEY", "API_KEY_ANDA");
define("TRIPAY_MERCHANT_CODE", "MERCHANT_CODE_ANDA");
}
?>