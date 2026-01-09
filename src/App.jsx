import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Cursor from "./components/Cursor";
import React from "react";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Scene from "./components/three/Scene";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}