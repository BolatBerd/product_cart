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
