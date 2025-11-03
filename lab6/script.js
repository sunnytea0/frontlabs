document.getElementById("loadUsers").addEventListener("click", getUsers);

function getUsers() {
  const status = document.getElementById("status");
  const container = document.getElementById("usersContainer");
  container.innerHTML = "";
  status.innerText = "Завантаження...";

  fetch("https://randomuser.me/api/?results=5") 
    .then(response => response.json())
    .then(data => {
      status.innerText = "Успішно!";
      const users = data.results;

      users.forEach(user => {
  
        const picture = user.picture.large;
        const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
        const country = user.location.country;
        const postcode = user.location.postcode;
        const phone = user.phone;

        const userCard = `
          <div class="user-card">
            <img src="${picture}" alt="User photo">
            <p><b>Ім’я:</b> ${name}</p>
            <p><b>Країна:</b> ${country}</p>
            <p><b>Індекс:</b> ${postcode}</p>
            <p><b>Телефон:</b> ${phone}</p>
          </div>
        `;
        container.innerHTML += userCard;
      });
    })
    .catch(error => {
      status.innerText = "Помилка при завантаженні даних!";
      console.error(error);
    });
}
