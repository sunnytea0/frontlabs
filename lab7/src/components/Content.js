import React, { useState } from "react";

function Content() {
  const [toggle8, setToggle8] = useState(false);
  const [toggle9, setToggle9] = useState(false);

  return (
    <>
      <p id="el3">
        <strong>Освіта:</strong><br />
        Школа №202, м.Київ<br />
        Ліцей №4, м.Буча<br />
        НТУ КПІ, м.Київ
      </p>

      <h3 id="el4">Мої хобі</h3>
      <ul id="el5">
        <li>Читання</li>
        <li>Подорожі</li>
        <li>Прогулянки з друзями</li>
        <li>Комп'ютерні ігри</li>
      </ul>

      <h3 id="el6">Улюблені книги / фільми</h3>
      <ol id="el7">
        <li>Блондинка в законі</li>
        <li>Жорстокий принц</li>
        <li>Гаррі Поттер</li>
        <li>Гіпотеза кохання</li>
      </ol>

      <h3
        id="el8"
        onClick={() => setToggle8(!toggle8)}
        style={{
          backgroundColor: toggle8 ? "#b3a0ff" : "#ffe6ff",
          color: toggle8 ? "white" : "black",
          cursor: "pointer",
          borderRadius: "5px",
          padding: "5px 10px",
          display: "inline-block"
        }}
      >
        Найулюбленіше місто, де я бувала:
      </h3>

      <p
        id="el9"
        onClick={() => setToggle9(!toggle9)}
        style={{
          backgroundColor: toggle9 ? "#ffcce0" : "#ffe6ff",
          color: toggle9 ? "darkblue" : "black",
          cursor: "pointer",
          borderRadius: "5px",
          padding: "5px 10px"
        }}
      >
        Ніцца — місто на південному сході Франції, друге за чисельністю населення у Провансі — Альпах —
        Лазурному Березі. Розташоване біля Середземного моря, вздовж Затоки ангелів.
      </p>

      <h3 id="el10">Фото міста:</h3>
    </>
  );
}

export default Content;
