import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsAPI";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await getPosts();
  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        (state.isLoading = false), (state.posts = action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.error = action.error?.message);
      });
  },
});
export default postsSlice.reducer;

/**
 * API call is an asynchronous task, so it is a Promise. It can have 3 stage- pending, fulfilled or rejected.
 * To handle these 3 stage, we need to use extraReducers function, which will give us a builder.
 * Now we can handle every case by using builder.addCase()
 * Now we need to create AsyncThunk to handle case inside builder.addCase()
 *
 */
