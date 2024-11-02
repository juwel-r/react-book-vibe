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
    <section className='my-8 md:my-12'>
      <h1 className='text-4xl font-bold text-center mb-8'>Books</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-content-center'>
      {
        books.map(book => <Book key={book.bookId} book={book}></Book>)
      }
    </div>
    </section>
  );
};

export default Books;