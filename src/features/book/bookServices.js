import axios from "axios";

const API_URL = "book/";

const createBook = async (bookData) => {
  console.log(bookData);
  const response = await axios.post(API_URL, bookData);
  return response.data;
};

const getBook = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const updateBook = async (bookData) => {
  const response = await axios.put(API_URL, bookData);
  return response.data;
};

const deleteBook = async (bookId) => {
  const response = await axios.delete(API_URL + bookId);
  return response.data;
};

const bookService = { createBook, getBook, updateBook, deleteBook };

export default bookService;
