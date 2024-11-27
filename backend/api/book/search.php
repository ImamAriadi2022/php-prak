<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

// Ambil ID dari query string
$id = isset($_GET['id']) ? $_GET['id'] : null;

if (!empty($id)) {
    $query = "SELECT * FROM buku WHERE id = ?";
    $stmt = $db->prepare($query);
    $stmt->execute([$id]);

    $buku = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($buku) {
        echo json_encode([
            "success" => true,
            "data" => $buku
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Buku tidak ditemukan."
        ]);
    }
} else {
    echo json_encode([
        "success" => false,
        "message" => "ID buku tidak diberikan."
    ]);
}
?>
