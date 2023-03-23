import React from "react";
import { useSelector } from "react-redux";
import PostItem from "../../components/PostItem/PostItem";

export default function PostsPage() {
  const { posts } = useSelector((state) => state.posts);

  return (
    <div>
      <h1>All posts:</h1>
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
  );
}
