// --- Завдання 1 ---
const el8 = document.getElementById("el8");
const el9 = document.querySelector("#el9");

let toggle8 = false;
let toggle9 = false;

el8.addEventListener("click", () => {
  toggle8 = !toggle8;
  el8.style.backgroundColor = toggle8 ? "#b3a0ff" : "#ffe6ff";
  el8.style.color = toggle8 ? "white" : "black";
});

el9.addEventListener("click", () => {
  toggle9 = !toggle9;
  el9.style.backgroundColor = toggle9 ? "#ffcce0" : "#ffe6ff";
  el9.style.color = toggle9 ? "darkblue" : "black";
});

// --- Завдання 2 ---
const imgContainer = document.getElementById("image-container");
const addBtn = document.getElementById("add");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const removeBtn = document.getElementById("remove");

// Додати нове зображення
addBtn.addEventListener("click", () => {
  const newImg = document.createElement("img");
  newImg.src = "NN.png";
  newImg.alt = "Ніцца-місто";
  newImg.style.width = "300px";
  newImg.style.margin = "10px";
  newImg.style.borderRadius = "10px";
  newImg.style.boxShadow = "0 0 10px gray";
  newImg.classList.add("city-photo");
  imgContainer.appendChild(newImg);
});

// Збільшити всі
increaseBtn.addEventListener("click", () => {
  const allImgs = document.querySelectorAll(".city-photo");
  allImgs.forEach(img => {
    const width = parseInt(getComputedStyle(img).width);
    img.style.width = (width + 50) + "px";
  });
});

// Зменшити всі
decreaseBtn.addEventListener("click", () => {
  const allImgs = document.querySelectorAll(".city-photo");
  allImgs.forEach(img => {
    const width = parseInt(getComputedStyle(img).width);
    if (width > 100) img.style.width = (width - 50) + "px";
  });
});

// Видалити всі
removeBtn.addEventListener("click", () => {
  const allImgs = document.querySelectorAll(".city-photo");
  allImgs.forEach(img => img.remove());
});
