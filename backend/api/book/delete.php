<?php
include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->id)) {
    $query = "DELETE FROM buku WHERE id = ?";
    $stmt = $db->prepare($query);

    if ($stmt->execute([$data->id])) {
        echo json_encode(["message" => "Buku berhasil dihapus."]);
    } else {
        echo json_encode(["message" => "Gagal menghapus buku."]);
    }
} else {
    echo json_encode(["message" => "ID buku tidak diberikan."]);
}
?>