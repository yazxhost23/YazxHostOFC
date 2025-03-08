<?php
include 'config.php';

$user_id = $_POST['user_id'];
$game = $_POST['game'];
$amount = $_POST['amount'];
$method = $_POST['method'];

$sql = "INSERT INTO transactions (user_id, game, amount, method) VALUES ('$user_id', '$game', '$amount', '$method')";
if ($conn->query($sql) === TRUE) {
    $updateSaldo = "UPDATE users SET balance = balance - $amount WHERE id = '$user_id'";
    $conn->query($updateSaldo);

    echo json_encode(["status" => "success", "message" => "Top-up berhasil"]);
} else {
    echo json_encode(["status" => "error", "message" => "Gagal melakukan top-up"]);
}
?>