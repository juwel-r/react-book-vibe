import { Link } from "react-router-dom";
import bookImg from "../../assets/bannerBook.png";
import { AiOutlineStar } from "react-icons/ai";
const Book = ({ book }) => {
  const {
    bookId,
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
<div className="border-2 rounded-2xl p-4 space-y-4 flex flex-col justify-between">
      <div className=" max-h-[326px] bg-gray-100 p-6 rounded-2xl">
        <img className="rounded-md h-full w-auto mx-auto " src={image} alt="" />
      </div>
      <div className="tags flex gap-4">
        {tags.map((tag, index) => (
          <p
            className="bg-primary/10 text-primary font-medium rounded-full px-4 py-1"
            key={index}
          >
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/book-details/${bookId}`}><h1 className="text-2xl font-bold flex-grow hover:text-green-500 w-auto text-nowrap overflow-hidden">{book.bookName}</h1></Link>
      <p className="font-medium">{author}</p>
      <div className="border-t-2 border-dashed"></div>
      <div className="flex items-center justify-between">
        <p className="font-medium">{category}</p>
        <p className="flex items-center justify-between">
          {rating}
          <span className="text-xl">
            <AiOutlineStar />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Book;
