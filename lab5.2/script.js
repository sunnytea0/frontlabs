
const variant = 8;
const table = document.getElementById("myTable");


let counter = 1;
for (let i = 0; i < 6; i++) {
  const row = table.insertRow();
  for (let j = 0; j < 6; j++) {
    const cell = row.insertCell();
    const cellNumber = counter;            
    cell.textContent = cellNumber;
    cell.dataset.row = i;
    cell.dataset.col = j;
    cell.dataset.num = String(cellNumber); 

    
    cell.addEventListener("mouseover", () => {
      if (Number(cell.dataset.num) === variant) {
        cell.style.backgroundColor = randomColor();
      }
    });

   
    cell.addEventListener("click", () => {
      if (Number(cell.dataset.num) === variant) {
        const picker = document.getElementById("colorPicker");
        if (picker) {
          cell.style.backgroundColor = picker.value;
        }
      }
    });

    
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


function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
}
