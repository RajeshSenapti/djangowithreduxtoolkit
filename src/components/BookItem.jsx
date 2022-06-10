import { useSelector, useDispatch } from "react-redux";

import { deleteBook } from "../features/book/bookSlice";

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div>
        <h1>{book.BookId}</h1>
        <h1>{book.BookName}</h1>
        <button
          onClick={() => dispatch(deleteBook(book.BookId))}
          className="close"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default BookItem;
