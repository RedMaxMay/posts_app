import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../store/postsSlice";

export default function PostItem({ id, title, text }) {
  const dispatch = useDispatch();

  const del = () => {
    dispatch(deletePost({ id }));
  };

  return (
    <div className="post__item">
      <p className="post__item-title">{title}</p>
      <p className="post__item-text">{text}</p>
      <button onClick={() => del()}>Delete post</button>
    </div>
  );
}
