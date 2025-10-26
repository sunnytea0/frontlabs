
const variant = 8;
const table = document.getElementById("myTable");

// створення таблиці 6x6
let counter = 1;
for (let i = 0; i < 6; i++) {
  const row = table.insertRow();
  for (let j = 0; j < 6; j++) {
    const cell = row.insertCell();
    const cellNumber = counter;            // фіксуємо номер КОНКРЕТНОЇ клітинки
    cell.textContent = cellNumber;
    cell.dataset.row = i;
    cell.dataset.col = j;
    cell.dataset.num = String(cellNumber); // збережемо номер у data-атрибут

    // mouseover: випадковий колір тільки для клітинки з номером варіанта
    cell.addEventListener("mouseover", () => {
      if (Number(cell.dataset.num) === variant) {
        cell.style.backgroundColor = randomColor();
      }
    });

    // click: колір з палітри тільки для клітинки варіанта
    cell.addEventListener("click", () => {
      if (Number(cell.dataset.num) === variant) {
        const picker = document.getElementById("colorPicker");
        if (picker) {
          cell.style.backgroundColor = picker.value;
        }
      }
    });

    // dblclick (варіант 8): фарбуємо стовпці через один, починаючи з обраного стовпця
    cell.addEventListener("dblclick", () => {
      if (Number(cell.dataset.num) === variant) {
        const startCol = Number(cell.dataset.col);
        const rows = table.rows;
        for (let r = 0; r < rows.length; r++) {
          for (let c = startCol; c < 6; c += 2) {
            rows[r].cells[c].style.backgroundColor = randomColor();
          }
        }
      }
    });

    counter++;
  }
}

// коректне формування hex-кольору (включно з лідируючими нулями)
function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
}
