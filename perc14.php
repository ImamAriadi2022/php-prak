<?php
$host = 'localhost'; // Ganti dengan host database Anda
$dbname = 'nama_database'; // Ganti dengan nama database Anda
$username = 'username'; // Ganti dengan username database Anda
$password = 'password'; // Ganti dengan password database Anda

try { 
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password, 
    array( 
        \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION, 
        \PDO::ATTR_PERSISTENT => false 
    )); 
    echo "Sukses terhubung ke basis data $dbname pada host $host."; 
} catch (PDOException $pe) { 
    die("Tidak dapat terhubung ke basis data $dbname: " . $pe->getMessage()); 
}
?>