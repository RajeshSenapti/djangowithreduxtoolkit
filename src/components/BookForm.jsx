import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createBook, getBook } from "../features/book/bookSlice";

const BookForm = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    dispatch(createBook({ BookName: text }));
    setText("");
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Book</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Add Book
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookForm;
