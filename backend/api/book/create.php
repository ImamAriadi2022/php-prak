<?php
include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->judul) && !empty($data->penulis) && !empty($data->penerbit) && !empty($data->tahun_terbit) && isset($data->stok)) {
    $query = "INSERT INTO buku (judul, penulis, penerbit, tahun_terbit, stok) VALUES (?, ?, ?, ?, ?)";
    $stmt = $db->prepare($query);

    if ($stmt->execute([$data->judul, $data->penulis, $data->penerbit, $data->tahun_terbit, $data->stok])) {
        echo json_encode(["message" => "Buku berhasil ditambahkan."]);
    } else {
        echo json_encode(["message" => "Gagal menambahkan buku."]);
    }
} else {
    echo json_encode(["message" => "Data tidak lengkap."]);
}
?>
