import './comments.js';
import './cards.js';
import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import { Coffee } from './coffee.js';
import { Tea } from './tea.js';
import { Lemonade } from './lemonade.js';
import { Cafe } from './cafe.js';

const productCard = document.querySelector('.card');
const productCards = document.querySelectorAll('.card');
const changeColorCardBtn = document.querySelector('#change-color-card-btn');
const changeColorCardsBtn = document.querySelector('#change-color-cards-btn');
const openGoogleBtn = document.querySelector('#open-google');
const blueColorHash = '#9dbff3ff';
const greenColorHash = '#d5ddd5ff';
const googleURL = 'https://google.com';

changeColorCardBtn.addEventListener('click', () => {
  productCard.style.backgroundColor = blueColorHash;
})
changeColorCardsBtn.addEventListener('click', () => {
  productCards.forEach((card) => 
  card.style.backgroundColor = greenColorHash)
})
openGoogleBtn.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer === true) {
    window.open(googleURL)
  } else {
    return;
  }
}

const title = document.querySelector('.heading');
const headerContent = title.textContent;

title.addEventListener('mouseover', () => {
  console.log(headerContent);
});

const changeColorBtn = document.querySelector('.bg-aquamarine');

changeColorBtn.addEventListener('click', () => {
  changeColorBtn.classList.toggle('bg-red')
})

const espresso = new Coffee({
  name: 'Эспрессо',
  size: 'Средний',
  price: 150,
  temperature: 'Горячий',
  sugar: 'Без сахара',
  typeMilk: 'Миндальное',
  typeGrains: 'Arabica',
});

const greenTea = new Tea({
  name: 'Зеленый чай',
  size: 'Большой',
  price: 100,
  temperature: 'Горячий',
  typeTea: 'Зеленый',
  hasLemon: 'Да'
});

const mojito = new Lemonade({
  name: 'Мохито',
  size: 'Большой',
  price: 120,
  temperature: 'Холодный',
  flavor: 'Мята и лайм'
});

const myCafe = new Cafe({
  name: 'Кофейня на углу',
  location: 'ул. Ленина, д. 10'
});

console.log(myCafe.getCafeInfo());

myCafe.orderDrink(espresso);
myCafe.orderDrink(greenTea);
myCafe.orderDrink(mojito);
