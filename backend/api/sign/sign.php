<?php
include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

$username = 'imam2';
$password = 'imam123';
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$query = "INSERT INTO users (username, password) VALUES (?, ?)";
$stmt = $db->prepare($query);
$stmt->execute([$username, $hashedPassword]);

echo "User berhasil ditambahkan.";
?>