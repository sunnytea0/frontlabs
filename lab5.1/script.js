document.getElementById("checkBtn").addEventListener("click", validate);
document.getElementById("clearBtn").addEventListener("click", clearForm);

// === Регулярні вирази ===
const regex = {
  pib: /^[А-ЯЇІЄҐA-Z][а-яїієґa-z'’\-]+ [А-ЯЇІЄҐA-Z]\.[А-ЯЇІЄҐA-Z]\.$/u,
  phone: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
  idcard: /^[A-Za-zА-Яа-яІЇЄҐ]{2}\s№\d{6}$/,
  faculty: /^[A-Za-zА-Яа-яІЇЄҐ]{4}$/,
  dob: /^\d{2}\.\d{2}\.\d{4}$/
};

// === Тексти підказок ===
const helpText = {
  pib: "Формат має бути: Прізвище І.П. (наприклад: Шевченко Т.Г.)",
  phone: "Формат має бути: (ЦЦЦ)-ЦЦЦ-ЦЦ-ЦЦ",
  idcard: "Формат має бути: ТТ №ЧЧЧЧЧЧ (наприклад: АП №555555)",
  faculty: "Формат має бути: 4 літери (наприклад: FICE)",
  dob: "Формат має бути: ЦЦ.ЦЦ.ЦЦЦЦ"
};

// === Перевірка ===
function validate() {
  const fields = ["pib", "phone", "idcard", "faculty", "dob"];
  let valid = true;
  let data = {};

  fields.forEach(f => {
    const el = document.getElementById(f);
    const hint = document.getElementById(`${f}-hint`);
    const val = el.value.trim();
    const ok = f === "dob" ? checkDate(val) : regex[f].test(val);

    el.classList.remove("error", "valid");
    hint.textContent = ""; // очищаємо попередній текст

    if (ok) {
      el.classList.add("valid");
    } else {
      el.classList.add("error");
      hint.textContent = helpText[f];
      valid = false;
    }
    data[f] = val;
  });

  if (valid) showResult(data);
}

// === Перевірка дати ===
function checkDate(str) {
  if (!regex.dob.test(str)) return false;
  const [d, m, y] = str.split(".").map(Number);
  const date = new Date(y, m - 1, d);
  return date.getFullYear() === y && date.getMonth() === m - 1 && date.getDate() === d;
}

// === Виведення результату ===
function showResult(data) {
  const win = window.open("", "result", "width=400,height=400");
  win.document.write(`
    <h2>Введені дані</h2>
    <p>ПІБ: ${data.pib}</p>
    <p>Телефон: ${data.phone}</p>
    <p>ID-card: ${data.idcard}</p>
    <p>Факультет: ${data.faculty}</p>
    <p>Дата нар.: ${data.dob}</p>
  `);
}

// === Очищення ===
function clearForm() {
  document.querySelectorAll("input").forEach(i => {
    i.value = "";
    i.classList.remove("error", "valid");
  });
  document.querySelectorAll(".hint").forEach(h => h.textContent = "");
}
