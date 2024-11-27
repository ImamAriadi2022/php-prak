<?php
include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->id) && !empty($data->judul) && !empty($data->penulis) && !empty($data->penerbit) && !empty($data->tahun_terbit) && isset($data->stok)) {
    $query = "UPDATE buku SET judul = ?, penulis = ?, penerbit = ?, tahun_terbit = ?, stok = ? WHERE id = ?";
    $stmt = $db->prepare($query);

    if ($stmt->execute([$data->judul, $data->penulis, $data->penerbit, $data->tahun_terbit, $data->stok, $data->id])) {
        echo json_encode(["message" => "Buku berhasil diupdate."]);
    } else {
        echo json_encode(["message" => "Gagal mengupdate buku."]);
    }
} else {
    echo json_encode(["message" => "Data tidak lengkap."]);
}
?>
