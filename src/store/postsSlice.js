import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: JSON.parse(localStorage.getItem("allPosts")) || [
      {
        id: 1,
        title: "test",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, odio?",
      },
    ],
  },
  reducers: {
    addPost(state, action) {
      state.posts.push({
        id: action.payload.id,
        title: action.payload.title,
        text: action.payload.text,
      });
    },
    deletePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
  },
});

export default postsSlice.reducer;
export const { addPost, deletePost } = postsSlice.actions;
