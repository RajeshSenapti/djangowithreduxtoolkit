import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BookForm from "../components/BookForm";
import { getBook, reset } from "../features/book/bookSlice";
import Spinner from "../components/Spinner";
import BookItem from "../components/BookItem";

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { books, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.books
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getBook());

    // return () => {
    //   dispatch(reset());
    // };
  }, [user, navigate, isError, message]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        {/* <h1>Welcome {user[0] && user[0].Name}</h1> */}
        <h1>Dashboard</h1>
        <BookForm />
        <section className="content">
          {books.length > 0 ? (
            <div className="goals">
              {books[0].map((book) => (
                <BookItem key={book.BookId} book={book} />
              ))}
            </div>
          ) : (
            <h3>There is no Book. Please add a Book</h3>
          )}
        </section>
      </section>
    </>
  );
};

export default Dashboard;
