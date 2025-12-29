const text = document.getElementById('load-text');
const errorText = document.getElementById('error');
const container = document.getElementById('users');

function showLoadingText() {
  text.style.display = 'block';
}

function hideMessages() {
  text.style.display = 'none';
  errorText.style.display = 'none';
}

function showError(error) {
  console.error(error);
  text.style.display = 'none';
  errorText.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  showLoadingText();

  setTimeout(() => {
    const users = localStorage.getItem('users');

    if (!users) {
      loadUsersToLocalStorage().then(() => showedUsersToLocalStorage()).catch(showError);
    } else {
      showedUsersToLocalStorage();
    }
  }, 2000);
});

async function loadUsersToLocalStorage() {
  showLoadingText();

  await new Promise(resolve => setTimeout(resolve, 2000));

  const response = await fetch('./users.json');
  if (!response.ok) {
    throw new Error('Ошибка загрузки данных');
  }

  const data = await response.json();

  localStorage.setItem('users', JSON.stringify(data));
}

function deleteAllUsersToLocalStorage() {
  localStorage.removeItem('users');
  container.innerHTML = '';
}

function deleteSpecificUser() {
  const userInput = prompt("Какой пользователь нужен? Введите ID (1-3)");
  const numberUserInput = Number(userInput);

  if (isNaN(numberUserInput) ) {
    alert("Введите число");
    return;
  }

  let users = JSON.parse(localStorage.getItem('users'));

  if (!users || users.length === 0) {
    alert("Нет пользователей для удаления");
    return;
  }

  users = users.filter(user => user.id !== numberUserInput);

  localStorage.setItem('users', JSON.stringify(users));
  showedUsersToLocalStorage();
}

function deleteUser(id) {
  let users = JSON.parse(localStorage.getItem('users'));

  if (!users) return;

  users = users.filter(user => user.id !== id);

  localStorage.setItem('users', JSON.stringify(users));
  showedUsersToLocalStorage();
}

function showedUsersToLocalStorage() {
  hideMessages();
  container.innerHTML = '';

  const users = JSON.parse(localStorage.getItem('users'));

  if (!users || users.length === 0) {
    container.innerHTML = '<p class="empty-text">Нет пользователей</p>';
    return;
  }

  users.forEach(user => {
    container.appendChild(createUserCard(user));
  });
}

function createUserCard(user) {
  const card = document.createElement('div');
  card.classList.add('user-card');

  card.innerHTML = `
    <h3>${user.name} ${user.surname}</h3>
    <p>Email: ${user.email}</p>
    <p>Возраст: ${user.age}</p>
    <p>Город: ${user.city}<p>
  `;

  return card;
}

document.getElementById('delete-all-users').addEventListener('click', deleteAllUsersToLocalStorage);
document.getElementById('delete-specific-user').addEventListener('click', deleteSpecificUser);
document.getElementById('get-all-users').addEventListener('click', () => {
  const users = JSON.parse(localStorage.getItem('users'));
  if (users && users.length > 0 && container.children.length > 0) {
    alert("Все пользователи уже отображены");
  } else {
    showedUsersToLocalStorage();
  }
});
