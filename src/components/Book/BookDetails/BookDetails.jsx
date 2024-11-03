import { image } from "framer-motion/client";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = ({listedBooksHandler}) => {
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
    <div className="grid md:grid-cols-2 gap-6 w-[95%] mx-auto place-content-center">
      <div className="max-w-[550px] mx-auto bg-gray-200 p-12 rounded-xl">
        <img className="w-10/12 mx-auto rounded-md" src={image} alt="" />
      </div>
      <div className="text-left">
        <h1 className="text-4xl font-bold">{bookName}</h1>
        <p className="text-lg font-medium mt-5">{author}</p>
        <div className="divider h-[1px] my-2"></div>
        <p className="text-lg font-medium">{category}</p>
        <div className="divider h-[1px] my-2"></div>
        <p className="font-bold mt-4">
          Review: <span className="font-normal">{review}</span>
        </p>
        <div className="space-y-2">
          <div className="tags flex gap-2 font-bold mt-6">
            {" "}
            Tags:
            {tags.map((tag, index) => (
              <p
                className="bg-primary/10 text-primary text-sm font-medium rounded-full px-4 py-[2px]"
                key={index}
              >
                {tag}
              </p>
            ))}
          </div>
          <p>
            Number of pages: <span className="font-bold">{totalPages}</span>
          </p>
          <p>
            Publisher: <span className="font-bold">{publisher}</span>
          </p>
          <p>
            Year of Publishing:{" "}
            <span className="font-bold">{yearOfPublishing}</span>
          </p>
          <p>
            Rating: <span className="font-bold">{rating}</span>
          </p>
        </div>
        <div className="space-x-2 mt-6">
          <button onClick={()=>listedBooksHandler(book, "read")} className="btn btn-outline px-6 font-bold"> Read</button>
          <button onClick={()=>listedBooksHandler(book, "wishlist")} className="btn bg-[#50B1C9] px-6 text-white font-bold">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
