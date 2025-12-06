class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.querySelector('.overlay');
    this.closeSelector = '.modal-close';
    this.closeBtn = this.modal.querySelector(this.closeSelector);
    this.openedClass = 'modal-showed';
    this.screenLock = 'modal-open';
    this._onKeydown = this._onKeydown.bind(this);
    this._onOverlayClick = this._onOverlayClick.bind(this);
    this._onCloseClick = this._onCloseClick.bind(this);
    this._lastFocused = null;
  }
  
 open() {
    if (this.isOpen()) return;
    this._lastFocused = document.activeElement;
    this.modal.classList.add(this.openedClass);

    document.body.classList.add(this.screenLock);
    document.addEventListener('keydown', this._onKeydown);
    
    if (this.overlay) {
      this.overlay.addEventListener('click', this._onOverlayClick);
    }
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', this._onCloseClick);
    }
    this.modal.focus();
  }

  close() { 
    if (!this.isOpen()) return;
    this.modal.classList.remove(this.openedClass);
    document.body.classList.remove(this.screenLock);
  }

  isOpen() {
    return this.modal.classList.contains(this.openedClass);
  }
  _onKeydown(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }
  _onOverlayClick() {
    this.close();
  }
  _onCloseClick(e) {
    e.preventDefault();
    this.close();
  }
}

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

class Form {
  constructor(formId){
    this.form = document.getElementById(formId);
    this.registerBtn = '.registerBtn';
    
  }
  register(){
    
  }
}


if (registerForm) {
  const errorEl = registerForm.querySelector('.register-error');
  const passwordEl = registerForm.querySelector('#password');
  const confirmEl = registerForm.querySelector('#confirmPassword');

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    Array.from(registerForm.elements).forEach(el => {
      if (el.tagName === 'INPUT' && (el.type === 'text' || el.type === 'email' || el.type === 'password')) {
        el.value = el.value.trim();
      }
    });

    if (!registerForm.checkValidity()) {
      registerForm.reportValidity();
      return;
    }

    const password = passwordEl ? passwordEl.value : '';
    const confirmPassword = confirmEl ? confirmEl.value : '';

    if (password !== confirmPassword) {
      if (errorEl) {
        errorEl.textContent = 'Пароли не совпадают. Регистрация отклонена.';
        errorEl.style.display = 'block';
      } else {
        alert('Пароли не совпадают. Регистрация отклонена.');
      }
      return;
    } else {
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.style.display = 'none';
      }
    }
    
    const formData = new FormData(registerForm);
    
// 6. Сохраняем этот объект в переменную для дальнейшего использования.
    
    user = {
      ...Object.fromEntries(formData.entries()),
      createdDate: new Date()
    };
    
    console.log(user);

    alert('Регистрация успешна');
    registerForm.reset();
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
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    Array.from(authForm.elements).forEach(el => {
      if (el.tagName === 'INPUT' && (el.type === 'text' || el.type === 'password')) {
        el.value = el.value.trim();
      }
    });
    if (!authForm.checkValidity()) {
      authForm.reportValidity();
      return;
    }

// 9. В открытой модалке у нас будет форма авторизации: 
// логин, пароль, кнопка "Войти". 
// Используя объект с задания №6, проверяем, 
// ввели ли мы правильные данные? Если да - то по нажатию на кнопку "Войти",
//  модальное окно должно закрыться и пользователь должен получить сообщение
//  об успешном входе, если нет - модальное окно не закрывается, 
// пользователь получает сообщение об ошибке, например: 
// "Неверный логин или пароль".
    
    const loginAttempt = authForm.querySelector('#form__login').value.trim();
    const passwordAttempt = authForm.querySelector('#form__password').value.trim();

// 10. Создаем глобальную переменную "currentUser".
//  После успешной авторизации - присваиваем ей объект с задания №6 
// и добавляем свойство lastLogin и присваиваем ему дату/время 
// последнего входа, используя new Date()

    currentUser = {...user, lastLogin: new Date()};

    if (!currentUser) {
      alert('Пользователь не найден. Сначала зарегистрируйтесь.');
      return;
    }
    if (loginAttempt === currentUser.login && passwordAttempt === currentUser.password) {
      console.log('Вход успешен: ', {currentUser});
      closeModal();
      alert('Вход успешен');
    } else {
      alert('Неверный логин или пароль');
    }
  });
}
