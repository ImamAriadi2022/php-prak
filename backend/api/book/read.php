<?php
include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

$query = "SELECT * FROM buku";
$stmt = $db->prepare($query);
$stmt->execute();

$buku = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($buku);
?>
