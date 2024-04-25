import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  commentsLoading: false,
  commentsSuccess: false,
  commentsError: false,
};

const commentsSlice = createSlice({
  name: "commentsSlice",
  initialState,
  reducers: {
    getComments: (state, action) => {
      state.commentsLoading = true;
    },
    getCommentsSuccess: (state, action) => {
      state.comments = action.payload.comments;
      state.commentsLoading = false;
      state.commentsSuccess = true;
    },
    getCommentsError: (state, action) => {
      state.comments = [];
      state.commentsLoading = false;
      state.commentsError = true;
    },
  },
});

export const { getComments, getCommentsSuccess, getCommentsError } =
  commentsSlice.actions;

export default commentsSlice.reducer;
