import React from 'react';
import { Container } from 'react-bootstrap';
import BookList from '../components/BookList';
import SearchBook from '../components/SearchBook'

function Dashboard() {
  return (
    <Container className="mt-4">
      <h2>Manajemen Buku</h2>
      <SearchBook />
      <BookList />
    </Container>
  );
}

export default Dashboard;
