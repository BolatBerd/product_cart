const text = document.getElementById('load-text');
const downloadFinished = document.getElementById('download-finished');


function hideElements() {
  downloadFinished.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  try  {
    if (localStorage.length === 0) {
      loadUsersToLocalStorage()
      throw new Error('Файл users.json не найден');
    }
  } catch (error) {
   console.error('Ошибка:', error);
   error.style.display = 'block';
  }
});
  
async function loadUsersToLocalStorage() {
  hideElements();
  showedText()
  try {
    const response = await fetch('./users.json');

    if (!response.ok) {
      throw new Error('Ошибка загрузки JSON');
    }

    const date = await response.json();
    const users = date.users;
    
    users.forEach((user, index) => {
      const userKey = `user_${index + 1}`;
      localStorage.setItem(userKey, JSON.stringify(user));
      console.log(`Пользователь ${userKey} сохранён в localStorage`);
    });
  } catch (error) {
    console.error('Ошибка:', error);
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

document.getElementById('delete-all-users').addEventListener('click', deleteAllUsersToLocalStorage);
document.getElementById('delete-specific-user').addEventListener('click', deleteUser);
document.getElementById('get-all-users').addEventListener('click', showedUsersToLocalStorage)
document.getElementById('get-all-users').addEventListener('click', showedText);