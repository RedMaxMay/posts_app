import React from "react";
import { usePostsContext } from "../Context/PostsContext";

export default function AddPostForm() {
  const { title, id, text, setTitle, setId, setText, addNewPost } =
    usePostsContext();

  return (
    <>
      <h1>Create New post here!</h1>
      <form onSubmit={addNewPost}>
        <input
          required
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title..."
        />
        <input
          required
          type="text"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Author ID..."
        />
        <textarea
          placeholder="Text for your post..."
          required
          className="form__right"
          name="text"
          id=""
          cols="30"
          rows="10"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button>Add post</button>
      </form>
    </>
  );
}
