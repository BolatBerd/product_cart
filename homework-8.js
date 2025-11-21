import { cards } from "./cards.js";

// 3. По аналогии из лекции — создать и 
// реализовать шаблон для продуктовых карточек.

const template = document.getElementById("card-template");
const productList = document.querySelector(".product-list");

function fillTemplate(clone, card) { 
  clone.querySelector(".card_img").src = `../img/${card.imgName}.jpg`;
  clone.querySelector(".card_img").alt = card.alt;
  clone.querySelector(".product-category").textContent = card.category;
  clone.querySelector(".card_name").textContent = card.name;
  clone.querySelector(".card_description").textContent = card.description;

  const compList = clone.querySelector(".product_composition");
  clone.querySelector(".product_composition").textContent  = 'Состав:';
  card.composition.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    compList.appendChild(li);
  });
  
  clone.querySelector(".card_price-text").textContent  = 'Цена';
  clone.querySelector(".card_price").textContent  = `${card.price}₽`;
};

// 5. Используя метод .reduce(), получить строку, 
// которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const getCardNameWithReduce = cards.reduce((acc, card) => {
  acc.push(card.name);
  return acc;
}, []);

// 6. Используя метод .reduce(), получить массив объектов, 
// где ключем является название продукта, а значением - его описание.

const getNameAndDescriptionWithReduce = cards.reduce((acc, card) => {
  acc.push({[card.name]: card.description});
  return acc;
}, []);

// 7*. Реализовать функцию, которая при старте нашей страницы выводит сообщение
//  с текстом, мол "Сколько карточек отобразить? От 1 до 5" 
// и в зависимости от результата - будет выводить это количество.
//  Должна быть защита от введенных других значений (имеется ввиду проверка if)

function renderCards(count) {
  productList.innerHTML = "";

  const limitedCards = cards.slice(0, count);

  limitedCards.forEach(card => {
    const clone = template.content.cloneNode(true);

    fillTemplate(clone, card);

    productList.appendChild(clone);
  });
}

function askCardsCount() {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const numberUserInput = Number(userInput);

  if (!isNaN(numberUserInput) && numberUserInput >= 1 && numberUserInput <= 5) {
    return numberUserInput;
  }

  alert("Введите число от 1 до 5!");
  return askCardsCount();
}

document.addEventListener("DOMContentLoaded", () => renderCards(askCardsCount()));
