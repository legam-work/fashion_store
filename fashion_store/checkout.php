<?php
include "./includes/db.php";

$name = $_POST['name'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$total = $_POST['total'];

$stmt = $conn->prepare("INSERT INTO orders (customer_name, phone, address, total_price) VALUES (?, ?, ?, ?)");
$stmt->bind_param("sssd", $name, $phone, $address, $total);

if ($stmt->execute()) {
    echo "<h1>🎉 Đặt hàng thành công!</h1>";
    echo "<a href='index.php'>Quay về trang chủ</a>";
} else {
    echo "Lỗi: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
