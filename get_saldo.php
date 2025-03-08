<?php
include 'config.php';

$user_id = $_GET['user_id'];
$sql = "SELECT balance FROM users WHERE id = '$user_id'";
$result = $conn->query($sql);
$user = $result->fetch_assoc();

echo json_encode(["balance" => $user['balance']]);
?>