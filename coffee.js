import { Drink } from './drink.js';

export class Coffee extends Drink {
  #sugar;
  #typeMilk;
  #typeGrains;
  #location;
  constructor({name, size, price, temperature, sugar, typeMilk, typeGrains, location}) {
    super(name, size, price, temperature);
    this.#sugar = sugar;
    this.#typeMilk = typeMilk;
    this.#typeGrains = typeGrains;
    this.#location = location; 
  }
  
  #grindingGrains() {
    return `Идет помол зерен для приготовления кофе: ${this.name}`;
  }
  
  #heatMilk() {
    return `Молоко ${this.#typeMilk} подогрето для кофе: ${this.name}`;
  }
  
  infoCofe() {
    return `Кофе: ${this.name}, Размер: ${this.size}, Цена: ${this.price}, Температура: ${this.getTemperatureDrink()}, Сахар: ${this.#sugar}, Тип молока: ${this.#typeMilk}, Тип зерен: ${this.#typeGrains}`;
  }
  
  OrderDrink() {
    return `Заказан кофе: ${this.name} размером ${this.size} по цене ${this.price} с температурой ${this.getTemperatureDrink()} и сахаром ${this.#sugar} находится по адресу ${this.#location}.`;
  }
  
  serveDrink() {
    this.#grindingGrains();
    this.#heatMilk();
    return `Ваш кофе ${this.name} готов! Приятного аппетита!`;
  }
}
