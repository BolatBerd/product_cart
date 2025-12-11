import { Drink } from './drink.js';

export class Coffee extends Drink {
  #sugar;
  #typeMilk;
  #typeGrains;
  
  constructor({name, size, price, temperature, sugar, typeMilk, typeGrains}) {
    super(name, size, price, temperature);
    this.#sugar = sugar;
    this.#typeMilk = typeMilk;
    this.#typeGrains = typeGrains;
  }
  
  presentDrink() {
    console.log(`Кофе ${this.name}, ${this.size}. Зерна: ${this.#typeGrains}, молоко: ${this.#typeMilk}, температура: ${this.getTemperatureDrink()}, цена: ${this.price}`);
  }
  
  #prepareDrink() {
    console.log(`Помол зёрен: ${this.#typeGrains}`);
    console.log(`Подогрев молока: ${this.#typeMilk}`);
    console.log(`Добавление сахара: ${this.#sugar}`);
  }
  
  showDrinkInfo() {
    console.log(`Кофе: ${this.name}, Размер: ${this.size}, Цена: ${this.price}, Температура: ${this.getTemperatureDrink()}, Сахар: ${this.#sugar}, Тип молока: ${this.#typeMilk}, Тип зерен: ${this.#typeGrains}`);
  }
  
  orderDrink() {
    console.log(`Заказан кофе: ${this.name} размером ${this.size} по цене ${this.price} с температурой ${this.getTemperatureDrink()} и сахаром ${this.#sugar}.`);
  }
}
