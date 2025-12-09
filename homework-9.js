import { Modal } from './modal.js';
import {Form} from './form.js';
// 4. К Форме, которая прикреплена в футере - добавить логику:
// email должен соответствовать стандартам (добавить валидацию),
//  если он не заполнен - форма не отправляется. Кнопка "Подписаться"
//  и есть "отправкой формы", при нажатии на которую 
// мы будем выводить консоль лог в виде объекта:  { email: 'введенная почта' }

const footerForm = document.querySelector('.footer__form');
const emailInput = footerForm.querySelector('#form__email');

footerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  emailInput.value = email;

  if (!email) {
    alert('Пожалуйста, введите email.');
    emailInput.focus();
    return;
  }
  if (!emailInput.checkValidity()) {
    alert('Пожалуйста, введите корректный email.');
    emailInput.focus();
    return;
  }
  console.log({ email });
});

// 5. Создать форму для регистрации. 
// Она должна содержать поля: имя, фамилия, 
// дата рождения, логин, пароль, повторение пароля. 
// Используйте <label> для того, что бы указать пользователю,
//  какое поле за что отвечает.
//  Также важно использовать placeholder 
// (обо всем этом можно будет почитать в документации в конце поста)
//  Разрешается добавить поля на ваше усмотрение.
//  Все поля должны иметь валидацию.
//  Если пользователь ввел два разных пароля - 
// мы должны предупредить его о том, что регистрация отклонена. 
// Если регистрация успешна - также выводим объект с свойствами и их значениями,
//  как в задании №4. Дополнительно мы должны добавить 
// к этому объекту свойство createdOn и указать туда время создания 
// (используем сущность new Date())
const registerForm = document.getElementById('register-form');
let currentUser = undefined;
let user = undefined;

if (registerForm) {
  const registerObj = new Form('register-form');
  const errorEl = registerForm.querySelector('.register-error');

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!registerObj.isValidate()) {
      return;
    }

    const values = registerObj.getValues();

    if (values.password !== values.confirmPassword) {
      errorEl.textContent = 'Пароли не совпадают. Регистрация отклонена.';
      errorEl.style.display = 'block';
      return;
    }

    errorEl.textContent = '';
    errorEl.style.display = 'none';

    user = {
      ...values,
      createdDate: new Date()
    };

    console.log(user);
    alert('Регистрация успешна');
    registerObj.reset();
  });
}

// 7. Создать кнопку "Аутентификация", не стесняемся добавлять стили, 
// практикуем css.

// 8. Создать модальное окно, используя классы "modal, modal-showed".
//  Логика такая: при нажатии на кнопку у нас открывается модальное 
// окно путем добавления modal-showed к div с классом modal. 
// Не забываем добавить кнопку для закрытия модалки (крестик в углу).  
// Важные правила создания модалки:
// 1) Задний фон должен быть затемнён, но не полностью черный 
// (Создаем класс overlay, который будет затемнять всю страницу)
// 2) Модальное окно находиться ровно по центру страницы,
//  независимо от масштаба

const authBtn = document.getElementById('auth-btn');
const authModal = document.getElementById('auth-modal');
const overlay = document.getElementById('overlay');
const modalClose = document.getElementById('modal-close');
const authForm = document.getElementById('auth-form');

let authModalInstance = null;
if (authModal) {
  authModalInstance = new Modal('auth-modal', {
    overlayId: 'overlay',
    closeSelector: '#modal-close'
  });
}
function openModal() {
 if (authModalInstance) {
    authModalInstance.open();
 }
}

function closeModal() {
  if (authModalInstance) {
    authModalInstance.close();
  }

  if (authForm) authForm.reset();
}
if (authBtn) {
  authBtn.addEventListener('click', openModal);
}
if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}
if (overlay) {
  overlay.addEventListener('click', closeModal);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && authModal.classList.contains('modal-showed')) {
    closeModal();
  }
});

if (authForm) {
  const authObj = new Form('auth-form');

  authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!authObj.validate()) {
      return;
    }

    const values = authObj.getValues();

    if (!user) {
      alert('Пользователь не найден. Сначала зарегистрируйтесь.');
      return;
    }

    if (values.login === user.login && values.password === user.password) {
      currentUser = {...user, lastLogin: new Date()};
      console.log('Вход успешен: ', {currentUser});
      closeModal();
      alert('Вход успешен');
    } else {
      alert('Неверный логин или пароль');
    }
  });
}
