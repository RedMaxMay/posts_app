import React from "react";
import { usePostsContext } from "../Context/PostsContext";

export default function PostItem({ id, title, text }) {
  const { deletePost } = usePostsContext();

  return (
    <div className="post__item">
      <p className="post__item-title">{title}</p>
      <p className="post__item-text">{text}</p>
      <button onClick={() => deletePost(id)}>Delete post</button>
    </div>
  );
}
