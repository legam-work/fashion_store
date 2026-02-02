<?php
header("Content-Type: application/json");
header("Content-Type: application/json; charset=UTF-8");
include "./includes/db.php";

$data = json_decode(file_get_contents("php://input"), true);

$stmt = $conn->prepare(
  "INSERT INTO orders (customer_name, phone, address, total_price)
   VALUES (?, ?, ?, ?)"
);

$stmt->bind_param(
  "sssd",
  $data['name'],
  $data['phone'],
  $data['address'],
  $data['total']
);

echo json_encode([
  "status" => $stmt->execute() ? "success" : "error"
]);
