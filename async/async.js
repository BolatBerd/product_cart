const text = document.getElementById('load-text');
const downloadFinished = document.getElementById('download-finished');

function hideElements() {
  downloadFinished.style.display = 'none';
}

async function loadUsersToLocalStorage() {
  hideElements();
  try {
    const response = await fetch('./users.json');

    if (!response.ok) {
      throw new Error('Ошибка загрузки JSON');
    }

    const users = await response.json();

    for (const userId in users) {
      const user = users[userId];

      localStorage.setItem(
        `user_${userId}`,
        JSON.stringify(user)
      );
    }

    console.log('Все пользователи сохранены по отдельным ключам');
  } catch (error) {
    console.error(error);
  }
}
function deleteAllUsersToLocalStorage(){
  hideElements();
  localStorage.clear();
}

function askUserCount() {
  hideElements();
  const userInput = prompt("Какой пользователь нужен?");
  const numberUserInput = Number(userInput);

  if (isNaN(numberUserInput) || numberUserInput < 1 || numberUserInput > 3) {
    alert("Введите число от 1 до 3");
    return null;
  }
  
  return numberUserInput;
}

function deleteUser() {
  hideElements();
  const id = askUserCount();
  if (!id) return;
  console.log(`user_${id} удалён`);
  localStorage.removeItem(`user_${id}`);
}

async function showedUsersToLocalStorage() {
  hideElements();
  
  const container = document.getElementById('users'); 
  container.innerHTML = '';
  
  for (let i = 1; i <= 3; i++) {
    const userData = localStorage.getItem(`user_${i}`);

    if (userData) {
      const user = JSON.parse(userData);
      setTimeout (() => {const card = createUserCard(user);
      container.appendChild(card);}, 2000 );
    }
  }
}

function createUserCard(user) {
  
  const card = document.createElement('div');
  card.classList.add('user-card');

  card.innerHTML = `
    <h3>${user.name} ${user.surname}</h3>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Возраст:</strong> ${user.age}</p>
  `;

  return card;
}

async function showedText() {
  text.style.display = 'block';
  setTimeout(() => {
    text.style.display = 'none';
    downloadFinished.style.display = 'block';
  }
  , 2000);
}

document.getElementById('upload-users').addEventListener('click', loadUsersToLocalStorage);
document.getElementById('delete-all-users').addEventListener('click', deleteAllUsersToLocalStorage);
document.getElementById('delete-specific-user').addEventListener('click', deleteUser);
document.getElementById('get-all-users').addEventListener('click', showedUsersToLocalStorage)
document.getElementById('get-all-users').addEventListener('click', showedText);