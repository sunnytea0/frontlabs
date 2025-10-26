function validateForm() {
  const fields = {
    pib: /^[А-ЯІЇЄ][а-яіїє']+\s[А-Я]\.[А-Я]\.$/,
    group: /^[A-ZА-ЯІЇЄ]{2}-\d{2}$/,
    idcard: /^[A-ZА-ЯІЇЄ]{2}\s№\d{6}$/,
    birth: /^\d{2}\.\d{2}\.\d{4}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
  };

  let valid = true;
  let values = "";

  for (let id in fields) {
    const input = document.getElementById(id);
    if (fields[id].test(input.value)) {
      input.classList.remove("error");
      values += `${id.toUpperCase()}: ${input.value}\n`;
    } else {
      input.classList.add("error");
      valid = false;
    }
  }

  if (valid) {
    window.open("", "_blank").document.write("<pre>" + values + "</pre>");
  } else {
    alert("Є помилки у введених даних!");
  }
}
