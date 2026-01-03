const text = document.getElementById('load-text');
const errorText = document.getElementById('error');
const container = document.getElementById('users');
const userCardTemplate = document.getElementById('user-card-template');

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
      loadUsers().then(() => showedUsers()).catch(showError);
    } else {
      showedUsers();
    }
  }, 2000);
});

async function loadUsers() {
  showLoadingText();
  container.innerHTML = '';
  
  await new Promise(resolve => setTimeout(resolve, 2000));

  const response = await fetch('./users.json');
  if (!response.ok) {
    throw new Error('Ошибка загрузки данных');
  }

  const data = await response.json();
  localStorage.setItem('users', JSON.stringify(data));
}

function deleteAllUsers() {
  localStorage.removeItem('users');
  container.innerHTML = '';
}

function deleteSpecificUser() {
  const userInput = prompt("Какой пользователь нужен? Введите ID пользователя");
  const numberUserInput = Number(userInput);

  if (isNaN(numberUserInput)) {
    alert("Введите число");
    return;
  }

  let users = JSON.parse(localStorage.getItem('users'));

  if (!users || users.length === 0) {
    alert("Нет пользователей для удаления");
    return;
  }

  if (users.length < numberUserInput || numberUserInput <= 0) {
    alert("Пользователя с таким ID нет");
    return;
  }
  
  users = users.filter(user => user.id !== numberUserInput);

  localStorage.setItem('users', JSON.stringify(users));
  showedUsers();
}

function deleteUser(id) {
  let users = JSON.parse(localStorage.getItem('users'));

  if (!users) {
    return;
  }

  users = users.filter(user => user.id !== id);

  localStorage.setItem('users', JSON.stringify(users));
  showedUsers();
}

function showedUsers() {
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

function editUser(id, newName, newSurname, newEmail, newAge, newCity) {
  let users = JSON.parse(localStorage.getItem('users'));

  if (!users) {
    return;
  } 
  users = users.map(user => {
    if (user.id === id) {
      return {
        ...user,
        name: newName ,
        surname: newSurname ,
        email: newEmail ,
        age: newAge ,
        city: newCity 
      };
    } else {
      return user;
    }
  });
  localStorage.setItem('users', JSON.stringify(users));
  showedUsers();
}

function createUserCard(user) {
  const card = userCardTemplate.content.cloneNode(true);
  card.querySelector('.user-name-card').textContent = `Карточка пользователя`;
  card.querySelector('.name').textContent = `${ user.name } ${ user.surname }`;
  card.querySelector('.email').textContent = `Email: ${ user.email }`;
  card.querySelector('.age').textContent = `Возраст: ${ user.age }`;
  card.querySelector('.city').textContent = `Город: ${ user.city }`;
  
  const deleteBtn = card.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    deleteUser(user.id);
  });
  const editBtn = card.querySelector('.edit-btn');
  editBtn.addEventListener('click', () => {
    const newName = prompt("Введите новое имя пользователя", user.name);  
    const newSurname =  prompt("Введите новую фамилию пользователя", user.surname);
    const newEmail = prompt("Введите новый email пользователя", user.email);  
    const newAge = prompt("Введите новый возраст пользователя", user.age);  
    const newCity = prompt("Введите новый город пользователя", user.city);
    editUser(user.id, newName, newSurname, newEmail, newAge, newCity);
  });
  return card;
}

document.getElementById('delete-all-users').addEventListener('click', deleteAllUsers);
document.getElementById('delete-specific-user').addEventListener('click', deleteSpecificUser);
document.getElementById('add-all-users').addEventListener('click', () => {
  loadUsers().then(() => showedUsers()).catch(showError);
});
document.getElementById('get-all-users').addEventListener('click', () => {
  const users = JSON.parse(localStorage.getItem('users'));
  if (users && users.length > 0 && container.children.length > 0) {
    alert("Все пользователи уже отображены");
  } else {
    showedUsers();
  }
});
