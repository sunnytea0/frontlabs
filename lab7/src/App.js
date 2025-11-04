import React from "react";
import "./index.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image"; // ✅ додай цей імпорт
import GoodsGallery from "./components/GoodsGallery"; // для завдання 2

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Image /> {/* ✅ встав компонент Image тут */}
      <GoodsGallery /> {/* ✅ нижче – галерея товарів */}
    </div>
  );
}

export default App;
