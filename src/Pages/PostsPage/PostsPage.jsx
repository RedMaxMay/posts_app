import React from "react";
import { usePostsContext } from "../../components/Context/PostsContext";
import PostItem from "../../components/PostItem/PostItem";

export default function PostsPage() {
  const { posts } = usePostsContext();

  return (
    <div>
      <h1>All posts:</h1>
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
  );
}
