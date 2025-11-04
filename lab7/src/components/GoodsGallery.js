import React from "react";
import GoodsCard from "./GoodsCard";

// Імпортуємо локальні зображення
import img1 from "../images/cruelprince.jpg";
import img2 from "../images/harrypotter.jpg";
import img3 from "../images/lovehypothesis.jpg";
import img4 from "../images/lovebrain.jpg";
import img5 from "../images/booklovers.jpg";
import img6 from "../images/narnia.jpg";

function GoodsGallery() {
  const goods = [
    { image: img1, name: "Жорстокий принц", price: "420 грн" },
    { image: img2, name: "Гаррі Поттер і філософський камінь", price: "450 грн" },
    { image: img3, name: "Гіпотеза кохання", price: "390 грн" },
    { image: img4, name: "Кохання в мозку", price: "410 грн" },
    { image: img5, name: "Книголюби", price: "380 грн" },
    { image: img6, name: "Хроніки Нарнії", price: "520 грн" }
  ];

  return (
    <>
      <h2 style={{ textAlign: "left", marginTop: "40px", marginBottom: "20px" }}>
        Галерея товарів — Улюблені книги 💜
      </h2>

      <div className="goods-gallery">
        {goods.map((item, index) => (
          <GoodsCard
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}

export default GoodsGallery;
