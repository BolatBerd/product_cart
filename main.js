const productCard = document.querySelector('.card');
const productCards = document.querySelectorAll('.card');
const chengeColorCardBtn = document.querySelector('#change-color-card-btn');
const chengeColorCardsBtn = document.querySelector('#change-color-cards-btn');
const openGoogleBtn = document.querySelector('#open-google');
const blueColorHash = '#9dbff3ff';
const greenColorHash = '#d5ddd5ff';
const GoogleURL = 'https://google.com';

chengeColorCardBtn.addEventListener('click', () => {
  productCard.style.backgroundColor = blueColorHash;
})
chengeColorCardsBtn.addEventListener('click', () => {
  productCards.forEach((card) => 
  card.style.backgroundColor = greenColorHash)
})
openGoogleBtn.addEventListener('click', openGoogle)

function openGoogle(){
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer === true){
    window.open(GoogleURL)
  } else {
    return;
  }
}

const titleText = document.querySelector('.heading');
const textContent = titleText.textContent;

titleText.addEventListener('mouseover', () => {
  console.log(textContent);
});

const changeColorBtn = document.querySelector('.change-color-btn');

changeColorBtn.addEventListener('click', () => {
  changeColorBtn.classList.toggle('change-color-btn-red')
})
