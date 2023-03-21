import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import FormPage from "./Pages/FormPage/FormPage";
import PostsPage from "./Pages/PostsPage/PostsPage";

function App() {


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
