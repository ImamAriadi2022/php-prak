<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection(); // Pastikan fungsi ini mengembalikan nilai

$query = "SELECT * FROM buku";
$stmt = $db->prepare($query);
$stmt->execute();

$buku = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($buku);
?> 