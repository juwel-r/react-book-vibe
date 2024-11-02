import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("public/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      {
        books.map(book => <Book key={book.bookId} book={book}></Book>)
      }
    </div>
  );
};

export default Books;