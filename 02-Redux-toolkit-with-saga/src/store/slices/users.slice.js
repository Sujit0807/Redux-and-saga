import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  usersLoading: false,
  usersSuccess: false,
  usersError: false,
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.usersLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.users = action.payload.users;
      state.usersLoading = false;
      state.usersSuccess = true;
    },
    getUsersError: (state, action) => {
      state.users = [];
      state.usersLoading = false;
      state.usersError = true;
    },
  },
});

export const { getUsers, getUsersSuccess, getUsersError } = usersSlice.actions;

export default usersSlice.reducer;
