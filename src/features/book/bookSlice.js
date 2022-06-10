import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookService from "./bookServices";

const initialState = {
  books: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Create new Book
export const createBook = createAsyncThunk(
  "books/create",
  async (bookData, thunkAPI) => {
    try {
      return await bookService.createBook(bookData);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get Books
export const getBook = createAsyncThunk("books/getAll", async (_, thunkAPI) => {
  try {
    return await bookService.getBook();
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//Update books
export const updateBook = createAsyncThunk(
  "books/update",
  async (bookData, thunkAPI) => {
    try {
      return await bookService.updateBook(bookData);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//Delete book
export const deleteBook = createAsyncThunk(
  "books/delete",
  async (bookId, thunkAPI) => {
    try {
      return await bookService.deleteBook(bookId);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books.push(action.payload);
      })
      .addCase(createBook.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books.push(action.payload);
      })
      .addCase(getBook.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books.push(action.payload);
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books.push(action.payload);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
