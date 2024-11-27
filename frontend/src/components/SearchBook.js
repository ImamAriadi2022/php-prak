import React, { useState, useEffect } from "react";
import { Table, Form, Button, InputGroup } from "react-bootstrap";
import axios from "axios";

const SearchBook = () => {
  const [books, setBooks] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost/php-prak/backend/api/book/read.php");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleSearch = async () => {
    if (!searchId) {
      alert("Masukkan ID Buku untuk mencari.");
      return;
    }
  
    try {
      const response = await axios.get(`http://localhost/php-prak/backend/api/book/search.php?id=${searchId}`);
      if (response.data.success) {
        setSearchResult(response.data.data);
      } else {
        setSearchResult(null); // Reset the result if not found
        alert(response.data.message); // Show the error message from API
      }
    } catch (error) {
      console.error("Error searching book:", error);
      setSearchResult(null);
      alert("Ada masalah dengan pencarian buku.");
    }
  };

  const handleCloseSearchResult = () => {
    setSearchResult(null); // Reset search result to hide the result
  };

  return (
    <div>
      <h2>Daftar Buku</h2>

      {/* Fitur Search */}
      <InputGroup className="mb-3">
        <Form.Control
          type="number"
          placeholder="Cari buku berdasarkan ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>
          Cari
        </Button>
      </InputGroup>

      {/* Hasil Pencarian */}
      {searchResult && (
        <div className="mb-4">
          <h4>Hasil Pencarian:</h4>
          <p><strong>ID:</strong> {searchResult.id}</p>
          <p><strong>Judul:</strong> {searchResult.judul}</p>
          <p><strong>Penulis:</strong> {searchResult.penulis}</p>
          <p><strong>Penerbit:</strong> {searchResult.penerbit}</p>
          <p><strong>Tahun Terbit:</strong> {searchResult.tahun_terbit}</p>
          <p><strong>Stok:</strong> {searchResult.stok}</p>
          <Button variant="secondary" onClick={handleCloseSearchResult}>Tutup</Button>
        </div>
      )}
    </div>
  );
};

export default SearchBook;
