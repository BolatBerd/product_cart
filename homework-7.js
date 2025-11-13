import { comments } from "./comments.js";
// 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом,
//  что бы мы получил массив чисел, начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersFiltr = numbers.filter(number => number >= 5); 

// 3. Создать массив строк, относящихся к любой сущности 
// (название фильмов/книг, кухонные приборы, мебель и т.д.),
//  проверить, есть ли в массиве какая-то определенная сущность.

const books = [  
  { 
    name: 'Война и мир',
    author: 'Лев Толстой',
    yearRelease: 1869,
    coverColor: 'Красный',
    genre: 'Роман-эпопея',
  },
  { 
    name: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    yearRelease: 1866,
    coverColor: 'Синий',
    genre: 'Психологический роман',
  },
  { 
    name: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    yearRelease: 1967,
    coverColor: 'Черный',
    genre: 'Фантастический роман',
  },
  { 
    name: 'Гарри Поттер и философский камень',
    author: 'Джоан Роулинг',
    yearRelease: 1997,
    coverColor: 'Зеленый',
    genre: 'Фэнтези',
  }
];

const booksFind = books.find(book => book.name === 'Мастер и Маргарита'); 

// 4. Написать функцию, которая аргументом будет принимать массив и изменять его
//  порядок на противоположный ("переворачивать") .
//  Два вышеуказанных массива с помощью этой функции перевернуть.

const booksReverse = books => books.reverse();

booksReverse(books);

// 7. Вывести в консоль массив тех комментариев, 
// почта пользователей которых содержит ".com"

const commentsIncludes = comments.filter(comment => comment.email.includes('.com')); 

// 8. Перебрать массив таким образом, что бы пользователи с id
// меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const commentsPostId = comments.map((comment) => ({...comment, postId:comment.id <= 5 ? comment.postId = 2 : comment.postId = 1})); 

// 9. Перебрать массив, что бы объекты состояли только из айди и имени

comments.forEach(comment => console.log(comment.id, comment.name)); 

const commentsIdAndName = comments.map((comment) => ({id:comment.id, name:comment.name})); 

// 10. Перебираем массив, добавляем объектам свойство 
// isInvalid и проверяем: если длина тела сообщения (body) 
// больше 180 символов - устанавливаем true, меньше - false.

const isInvalid = comments.map((comment) => ({ ...comment, isInvalid: comment.body.length > 180}));

console.log(isInvalid);

// 11. Почитать про метод массива reduce. 
// Используя его, вывести массив почт и провернуть
//  тоже самое с помощью метода map

const emailsReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

// 12. Почитать про методы toString(), join() 
// и перебрав массив с задания №11, привести его к строке.

console.log(emailsReduce.toString());
console.log(emailsReduce.join('\n'));

