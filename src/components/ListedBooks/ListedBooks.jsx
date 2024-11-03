import { useState } from "react";
import ReadBooks from "./ReadBooks";
import WishListBooks from "./WishListBooks";

const ListedBooks = ({ wishlistBooks, readBooks }) => {
  console.log("read books",readBooks)
  console.log("wishlish books",readBooks)
  const [read, setRead] = useState(true);
  const toggleHandler = (logic) => {
    setRead(logic);
  };
  return (
    <div>
        <div className="flex justify-start items-center gap-6 border">
            <p onClick={()=>toggleHandler(true)}>Read Books</p>
            <p onClick={()=>toggleHandler(false)}>Wishlist Books</p>
        </div>
      {read ? <ReadBooks></ReadBooks> : <WishListBooks></WishListBooks>}
    </div>
  );
};

export default ListedBooks;
