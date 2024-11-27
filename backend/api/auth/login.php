<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->username) && !empty($data->password)) {
    $query = "SELECT id, password FROM users WHERE username = ?";
    $stmt = $db->prepare($query);
    $stmt->execute([$data->username]);

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        // Log untuk debugging
        error_log("Password dari database: " . $user['password']);
        error_log("Password yang diinputkan: " . $data->password);

        if (password_verify($data->password, $user['password'])) {
            echo json_encode(["message" => "Login berhasil"]);
        } else {
            echo json_encode(["message" => "Login gagal. Password salah."]);
        }
    } else {
        echo json_encode(["message" => "Login gagal. Username tidak ditemukan."]);
    }
} else {
    echo json_encode(["message" => "Data tidak lengkap"]);
}
?>