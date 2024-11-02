import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("public/booksData.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      {
        books.map(book => <Book></Book>)
      }
    </div>
  );
};

export default Books;