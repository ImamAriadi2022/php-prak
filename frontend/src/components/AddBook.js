import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function AddBook({ onClose }) {
  const [form, setForm] = useState({ judul: '', penulis: '', penerbit: '', tahun_terbit: '', stok: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost/php-prak/backend/api/book/create.php', form);
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Judul</Form.Label>
        <Form.Control type="text" placeholder="Masukkan judul buku" required onChange={(e) => setForm({ ...form, judul: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Penulis</Form.Label>
        <Form.Control type="text" placeholder="Masukkan nama penulis" required onChange={(e) => setForm({ ...form, penulis: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Penerbit</Form.Label>
        <Form.Control type="text" placeholder="Masukkan nama penerbit" required onChange={(e) => setForm({ ...form, penerbit: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tahun Terbit</Form.Label>
        <Form.Control type="number" placeholder="Masukkan tahun terbit" required onChange={(e) => setForm({ ...form, tahun_terbit: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Stok</Form.Label>
        <Form.Control type="number" placeholder="Masukkan jumlah stok" required onChange={(e) => setForm({ ...form, stok: e.target.value })} />
      </Form.Group>
      <Button variant="primary" type="submit">Tambah</Button>
    </Form>
  );
}

export default AddBook;
