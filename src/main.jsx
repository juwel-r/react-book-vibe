import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/Root/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import BookDetails from "./components/Book/BookDetails/BookDetails.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";

  const listedBooksHandler = (listedBook, listedType) => {
    let readBooks = listedType === "read" ?  readBooks = listedBook: []
    let wishlistBooks = listedType !== "read" ?  wishlistBooks = listedBook: []
  };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/book-details/:bookId",
        element: (
          <BookDetails listedBooksHandler={listedBooksHandler}></BookDetails>
        ),
        loader: () => fetch("booksData.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks readBooks = {readBooks} wishlistBooks={wishlistBooks}></ListedBooks>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
