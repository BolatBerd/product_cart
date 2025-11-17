
// 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.
// import { cards } from "./cards.js";

// const template = document.getElementById("card-template");
// const productList = document.querySelector(".product-list");

// cards.forEach(card => {
//   const clone = template.content.cloneNode(true);

//   clone.querySelector(".card_img").src = card.img;
//   clone.querySelector(".card_img").alt = card.alt;
//   clone.querySelector(".product-category").textContent = card.category;
//   clone.querySelector(".card_name").textContent = card.name;
//   clone.querySelector(".card_description").textContent = card.description;

//   clone.querySelector(".comp-first").textContent = card.composition[0];
//   clone.querySelector(".comp-second").textContent = card.composition[1];
//   clone.querySelector(".comp-third").textContent = card.composition[2];

//   clone.querySelector(".card_price").innerHTML = card.price;

//   productList.appendChild(clone);
// });

// 4*. Подумать, как можно оптимизировать дублирование querySelector,
//  textContent и прочего, о чем говорилось на лекции.
//  1 вариант - маппинг, 2 вариант - использование data-атрибутов

import { cards } from "./cards.js";

const template = document.getElementById("card-template");
const productList = document.querySelector(".product-list");

cards.forEach(card => {
  const clone = template.content.cloneNode(true);

  clone.querySelectorAll("[data-field]").forEach(el => {
    const key = el.dataset.field;
    const value = card[key];

    if (key === "img") {
      el.src = value;
      el.alt = card.alt;
    }

    else if (key === "composition") {
      el.innerHTML = "";
      value.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        el.appendChild(li);
      });
    }
 
    else {
      el.textContent = value;
    }
  });

  productList.appendChild(clone);
});



// 5. Используя метод .reduce(), получить строку, 
// которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const getCardNameWithReduce  = cards.reduce((acc, card) => {
  acc.push(card.name);
  return acc;
}, []);

// 6. Используя метод .reduce(), получить массив объектов, 
// где ключем является название продукта, а значением - его описание.

const getNameAndDescriptionWithReduce  = cards.reduce((acc, card) => {
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

    clone.querySelectorAll("[data-field]").forEach(el => {
      const key = el.dataset.field;
      const value = card[key];

      if (key === "img") {
        el.src = value;
        el.alt = card.alt;
      }
      else if (key === "composition") {
        el.innerHTML = "";
        value.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          el.appendChild(li);
        });
      }
      else {
        el.textContent = value;
      }
    });

    productList.appendChild(clone);
  });
}

function askCardsCount() {
  while (true) {
    const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
    const number = Number(userInput);
    if (!isNaN(number) && number >= 1 && number <= 5) return number;
    alert("Введите число от 1 до 5!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const count = askCardsCount();
  renderCards(count);
});
