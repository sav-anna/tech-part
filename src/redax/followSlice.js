import { createSlice } from "@reduxjs/toolkit";

export const followSlice = createSlice({
  name: "follows",
  initialState: {
    following: "",
  },
  reducers: {
    addFollowing(state, { payload }) {
      state.following.push(payload);
    },
    removeFollowing(state, { payload }) {
      const index = state.following.findIndex((user) => user === payload);
      state.following.splice(index, 1);
    },
  },
});

export const { addFollowing, removeFollowing } = followSlice.actions;
export const getFollowing = (state) => state.follows.following;
