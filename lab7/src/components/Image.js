import React, { useState } from "react";
import myImage from "../NN.png";

function Image() {
  const [images, setImages] = useState([]);

  // Додати нове зображення
  const addImage = () => {
    setImages([...images, { id: Date.now(), width: 300 }]);
  };

  // Збільшити всі
  const increaseAll = () => {
    setImages(images.map(img => ({ ...img, width: img.width + 50 })));
  };

  // Зменшити всі
  const decreaseAll = () => {
    setImages(images.map(img => ({ ...img, width: Math.max(100, img.width - 50) })));
  };

  // Видалити всі
  const removeAll = () => setImages([]);

  return (
    <>
     
      <div
        id="image-container"
        style={{
          display: "flex",         
          alignItems: "flex-start",
          gap: "20px",
          marginLeft: "60px",
          marginTop: "10px",
          flexWrap: "wrap"         
        }}
      >
       
        <a
          href="https://serviceazur.com/ua/info/cities/nice/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            id="myImage"
            src={myImage}
            alt="Ніцца-місто"
            style={{
              width: "300px",
              borderRadius: "10px",
              boxShadow: "0 0 10px gray"
            }}
          />
        </a>

        
        {images.map(img => (
          <img
            key={img.id}
            src={myImage}
            alt="Ніцца-місто"
            style={{
              width: img.width + "px",
              borderRadius: "10px",
              boxShadow: "0 0 10px gray"
            }}
            className="city-photo"
          />
        ))}
      </div>

      
      <div className="buttons" style={{ textAlign: "center", marginTop: "15px" }}>
        <button onClick={addImage}>Додати зображення</button>
        <button onClick={increaseAll}>Збільшити</button>
        <button onClick={decreaseAll}>Зменшити</button>
        <button onClick={removeAll}>Видалити</button>
      </div>
    </>
  );
}

export default Image;
