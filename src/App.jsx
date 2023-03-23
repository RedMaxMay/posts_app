import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import FormPage from "./Pages/FormPage/FormPage";
import PostsPage from "./Pages/PostsPage/PostsPage";

function App() {
  const { posts } = useSelector((state) => state.posts);
  
  useEffect(() => {
    localStorage.setItem("allPosts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
