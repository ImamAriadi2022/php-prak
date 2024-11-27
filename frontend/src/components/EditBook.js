import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function EditBook({ book, onClose }) {
  const [form, setForm] = useState({
    id: book.id,
    judul: book.judul,
    penulis: book.penulis,
    penerbit: book.penerbit,
    tahun_terbit: book.tahun_terbit,
    stok: book.stok,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost/php-prak/backend/api/book/update.php', form);
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Judul</Form.Label>
        <Form.Control
          type="text"
          value={form.judul}
          required
          onChange={(e) => setForm({ ...form, judul: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Penulis</Form.Label>
        <Form.Control
          type="text"
          value={form.penulis}
          required
          onChange={(e) => setForm({ ...form, penulis: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Penerbit</Form.Label>
        <Form.Control
          type="text"
          value={form.penerbit}
          required
          onChange={(e) => setForm({ ...form, penerbit: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tahun Terbit</Form.Label>
        <Form.Control
          type="number"
          value={form.tahun_terbit}
          required
          onChange={(e) => setForm({ ...form, tahun_terbit: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Stok</Form.Label>
        <Form.Control
          type="number"
          value={form.stok}
          required
          onChange={(e) => setForm({ ...form, stok: e.target.value })}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Simpan Perubahan
      </Button>
    </Form>
  );
}

export default EditBook;
