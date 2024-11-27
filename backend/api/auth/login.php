<?php
include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

$query = "SELECT id, password FROM users WHERE username = ?";
$stmt = $db->prepare($query);
$stmt->execute([$data->username]);

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($data->password, $user['password'])) {
    session_start();
    $_SESSION['user_id'] = $user['id'];
    echo json_encode(["message" => "Login berhasil"]);
} else {
    echo json_encode(["message" => "Login gagal"]);
}
?>
