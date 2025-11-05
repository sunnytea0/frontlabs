import React from "react";
import "./index.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image"; 
import GoodsGallery from "./components/GoodsGallery"; 

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Image /> 
      <GoodsGallery /> 
    </div>
  );
}

export default App;
