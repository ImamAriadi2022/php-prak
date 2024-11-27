CREATE DATABASE TugasAkhir;

USE TugasAkhir;

CREATE TABLE buku (
    id INT PRIMARY KEY AUTO_INCREMENT,
    judul VARCHAR(255) NOT NULL,
    penulis VARCHAR(255) NOT NULL,
    penerbit VARCHAR(255) NOT NULL,
    tahun_terbit YEAR NOT NULL,
    stok INT NOT NULL
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Tambahkan user admin
INSERT INTO users (username, password) VALUES ('admin', PASSWORD('admin123'));
