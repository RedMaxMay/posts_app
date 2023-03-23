import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/postsSlice";

export default function AddPostForm() {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    const newPost = {
      id,
      title,
      text,
    };

    dispatch(addPost(newPost));

    setTitle("");
    setId("");
    setText("");
  };

  return (
    <>
      <h1>Create New post here!</h1>
      <form onSubmit={add}>
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
