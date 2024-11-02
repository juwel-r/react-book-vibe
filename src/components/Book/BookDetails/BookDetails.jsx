import { image } from "framer-motion/client";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const book = books.find((b) => b.bookId == bookId);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="grid grid-cols-2 gap-6 w-[95%] mx-auto">
      <div className="max-w-[550px] mx-auto bg-gray-200 p-12 rounded-xl">
        <img className="w-10/12 mx-auto" src={image} alt="" />
      </div>
      <div className="text-left space-y-6">
        <h1 className="text-4xl font-bold">{bookName}</h1>
        <p className="text-lg font-medium">{author}</p>
        <div className="divider"></div>
        <p className="text-lg font-medium">{category}</p>
        <div className="divider"></div>
        <p className="font-bold">Review: <span className="font-normal">{review}</span></p>
        <div className="tags flex gap-2 mt-6 font-bold"> Tags:
        {tags.map((tag, index) => (
          <p
            className="bg-primary/10 text-primary font-medium rounded-full px-4 py-1"
            key={index}
          >
            {tag}
          </p>
        ))}
      </div>
      <p>Number of pages: <span className="font-bold">{totalPages}</span></p>
      <p>Publisher: <span className="font-bold">{publisher}</span></p>
      <p>Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>
      <p>Ratig: <span className="font-bold">{rating}</span></p>
      </div>
    </div>
  );
};

export default BookDetails;
