import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookList: [],
  categoryList: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBookList: (state, action) => {
      state.bookList = action.payload;
    },
    setCategoryList: (state, action) => {
      state.categoryList = action.payload;
    },
  },
});

export const { setBookList, setCategoryList } = bookSlice.actions;

export const selectBookList = (state) => state.book.bookList;
export const selectCategoryList = (state) => state.book.categoryList;


export default bookSlice.reducer;
