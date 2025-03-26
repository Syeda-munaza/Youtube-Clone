import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

const App = () => {
const [sidebar, setSidebar]= useState(true);

  return (
    <Router>
      
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </Router>
  );
};

export default App;
