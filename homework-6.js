// 3. Создайте объект на основе ваших данных.
//  Имя, фамилия, почта, работа, должность, возраст, страна,
//   город, статус отношений и так далее. 
//   Чем больше - тем лучше (но не увлекайтесь, до 10 максимум)
//   . Подберите правильное название для переменной.

const humanData = {
  name: 'Иван',
  surname: 'Иванов',
  email: 'Ivan@gmail.com',
  work: 'IT company',
  post: 'Programmer',
  age: 30,
  country: 'Россия',
  city: 'Тюмень',
  relationshipStatus:'Женат'
};

// 4. Создайте объект, который будет хранить данные об автомобиле 
// (марка, модель, год выпуска, цвет, вид коробки). 
// Добавьте дополнительное свойство - владелец авто,
//  значением которого будет объект, описанный в пункте №3.
//   Желательно добавлять отдельной строкой (имеется ввиду не при создании объекта)

const carData = {
  carBrand: 'Toyota',
  model: 'Camry',
  yearRelease: 2018,
  color: 'Белый',
  gearbox: 'Автомат'
};

carData.carOwner = humanData;

// 5. Написать функцию которая аргументом будет принимать объект, описанный в пункте №4.
//  Она проверяет, есть ли в объекте свойство "максимальная скорость" MaxSpeed
//  , если нет - добавляет его и задает значение,
//   если есть - прекращает выполнение (ничего не делает)

const addMaxSpeed = carData => {
  const arrayCarData = Object.keys(carData);
    for (let i = 0; i <= arrayCarData.length - 1; i++) {
      if (arrayCarData[i] !== 'maxSpeed') {
      carData.maxSpeed = 250;
      }
  }
  // console.log(carData);
};

addMaxSpeed(carData);

// 6. Написать функцию, которая получает первым аргументом  — объект,
//  а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.

const showCarData = carData => {
  const arrayCarDataEntries = Object.entries(carData);
  //  console.log(arrayCarDataEntries);
};

showCarData(carData);

// 7. Создать массив, который содержит названия продуктовых 
// карточек ваших товаров (просто строки)

const arrayProductCard = [
  'Свежие яблоки красные',
  'Натуральный мед с цветочной пасеки',
  'Органический греческий йогурт',
  'Черный кофе молотый 250 г',
  'Хлеб из цельнозерновой муки',
  'Свежая морковь отборная',
  'Оливковое масло первого отжима',
  'Творог домашний 5%',
  'Зеленый чай в листах',
  'Шоколад горький 70% какао'
  ];
  
  //8. Создать массив, состоящий из объектов,
  //где объект представляет собой книгу 
  //(название, автор, год выпуска, цвет обложки, жанр) (3-5 книг).
  //После, используя известный нам метод массив, 
  //добавить еще одну книгу в конец списка.
  //Можете заменить книги на фильмы, или другую сущность, идею вы поняли.
  
const bookWarAndPeace = { 
  NameBook: 'Война и мир',
  Author: 'Лев Толстой',
  YearRelease: 1869,
  CoverColor: 'Красный',
  Genre: 'Роман-эпопея',
  };
const bookCrimeAndPunishment = { 
  NameBook: 'Преступление и наказание',
  Author: 'Фёдор Достоевский',
  YearRelease: 1866,
  CoverColor: 'Синий',
  Genre: 'Психологический роман',
  };
const bookMasterAndMargarita = { 
  NameBook: 'Мастер и Маргарита',
  Author: 'Михаил Булгаков',
  YearRelease: 1967,
  CoverColor: 'Черный',
  Genre: 'Фантастический роман',
  };
const bookHarryPotter = { 
  NameBook: 'Гарри Поттер и философский камень',
  Author: 'Джоан Роулинг',
  YearRelease: 1997,
  CoverColor: 'Зеленый',
  Genre: 'Фэнтези',
  };

const book1984 = { 
  NameBook: '1984',
  Author: 'Джордж Оруэлл',
  YearRelease: 1949,
  CoverColor: 'Серый',
  Genre: 'Антиутопия',
  };

const arrayBooks = [bookWarAndPeace, bookCrimeAndPunishment, bookMasterAndMargarita, bookHarryPotter];

arrayBooks.push(book1984);

// 9. Создать еще один массив, состоящих из тех же книг,
// но относящийся к определенной вселенной (Гарри Поттер, Марвел и так далее).
// (Если используете другую, свою сущность - импровизируйте).
// С помощью известного нам метода массива или оператора 
// (рекомендую использовать оператор), объединить эти два массива в один

const bookHarryPotterAndRoom = { 
  NameBook: 'Гарри Поттер и тайная комната',
  Author: 'Джоан Роулинг',
  YearRelease: 1998,
  CoverColor: 'Зеленый',
  Genre: 'Фэнтези',
  };
const bookSpiderMan = { 
  NameBook: 'Человек-Паук: Возвращение домой',
  Author: 'Грег Пак',
  YearRelease: 2017,
  CoverColor: 'Красный/Чёрный',
  Genre: 'Супергеройский роман',
  };
const bookFamousWars = { 
  NameBook: 'Знвёздые войны: Зло возрождается',
  Author: 'Эйса Уильямс',
  YearRelease: 2022,
  CoverColor: 'Черный с синим',
  Genre: 'Научная фантастика',
  };

const arrayBooksFantastic = [bookHarryPotterAndRoom, bookSpiderMan, bookFamousWars];

const books = [...arrayBooks, ...arrayBooksFantastic];
  
// 10. Почитать про метод массива — forEach. Написать функцию,
//  которая принимает массив сущностей с задания №8. 
//  Добавляем новое свойство для объекта "isRare (это редкий)" 
//  и в зависимости от года выпуска книги (или какой-то логики,
// связанной с вашей сущностью), устанавливаем true или false. 
// Что я хочу этим сказать: если книга выпущена позже 2000 года,
// устанавливаем true (да, это редкий), нет - false (значит это не редкий).

const addRare = arrayBooks => {
    for (let i = 0; i <= arrayBooks.length - 1; i++) {
      if (arrayBooks[i].YearRelease <= 2000) {
        arrayBooks[i].isRare = true;
      } else {
        arrayBooks[i].isRare = false;
      }
  }
};

addRare(arrayBooks);

// console.log(arrayBooks);
