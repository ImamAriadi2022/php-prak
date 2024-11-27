import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal } from 'react-bootstrap';
import AddBook from './AddBook';
import EditBook from './EditBook';

function BookList() {
  const [books, setBooks] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [editBook, setEditBook] = useState(null);

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost/php-prak/backend/api/book/read.php');
    setBooks(res.data);
  };

  const deleteBook = async (id) => {
    await axios.post('http://localhost/php-prak/backend/api/book/delete.php', { id });
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Button variant="primary" className="mb-3" onClick={() => setShowAdd(true)}>Tambah Buku</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Penerbit</th>
            <th>Tahun Terbit</th>
            <th>Stok</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.judul}</td>
              <td>{book.penulis}</td>
              <td>{book.penerbit}</td>
              <td>{book.tahun_terbit}</td>
              <td>{book.stok}</td>
              <td>
                <Button variant="warning" className="me-2" onClick={() => setEditBook(book)}>Edit</Button>
                <Button variant="danger" onClick={() => deleteBook(book.id)}>Hapus</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal Tambah Buku */}
      <Modal show={showAdd} onHide={() => setShowAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Buku</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddBook onClose={() => { setShowAdd(false); fetchBooks(); }} />
        </Modal.Body>
      </Modal>

      {/* Modal Edit Buku */}
      <Modal show={!!editBook} onHide={() => setEditBook(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Buku</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editBook && <EditBook book={editBook} onClose={() => { setEditBook(null); fetchBooks(); }} />}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookList;
