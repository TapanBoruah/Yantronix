import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Cursor from "./components/Cursor";
import React from "react";
import Navbar from "./components/header/Navbar";
import AboutSection from "./components/about/About";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection/>} />
      </Routes>
    </BrowserRouter>
  );
}
