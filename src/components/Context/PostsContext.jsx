// react
import { createContext, useContext, useState, useEffect } from "react";

// создаем контекст
const PostsContext = createContext();

// провайдер
export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("allPosts")) || []
  );
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("allPosts", JSON.stringify(posts));
  }, [posts]);

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id,
      title,
      text,
    };

    setPosts([...posts, newPost]);

    setTitle("");
    setId("");
    setText("");
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        title,
        id,
        text,
        setPosts,
        setTitle,
        setId,
        setText,
        addNewPost,
        deletePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

// утилита для извлечения значений из контекста
export const usePostsContext = () => useContext(PostsContext);
