<?php
include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->id)) {
    $query = "SELECT * FROM buku WHERE id = ?";
    $stmt = $db->prepare($query);
    $stmt->execute([$data->id]);

    $buku = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($buku) {
        echo json_encode($buku);
    } else {
        echo json_encode(["message" => "Buku tidak ditemukan."]);
    }
} else {
    echo json_encode(["message" => "ID buku tidak diberikan."]);
}
?>
