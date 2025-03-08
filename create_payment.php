<?php
include 'config.php';

$user_id = $_POST['user_id'];
$amount = $_POST['amount'];
$method = $_POST['method'];

$data = [
    'method' => $method,
    'merchant_ref' => uniqid(),
    'amount' => $amount,
    'customer_name' => "User ID $user_id",
];

$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL => "https://tripay.co.id/api/transaction/create",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => ["Authorization: Bearer " . TRIPAY_API_KEY],
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $data,
]);

$response = curl_exec($curl);
curl_close($curl);

echo $response;
?>