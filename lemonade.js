import { Drink } from './drink.js';

export class Lemonade extends Drink {
  #flavor;
  
  constructor({name, size, price, temperature, flavor}) {
    super(name, size, price, temperature);
    this.#flavor = flavor;
    this.temperature = temperature;
  }
  
  presentDrink() {
    console.log(`${this.name} размер ${this.size} напитка, температура ${this.temperature}, и цена ${this.price}, вкус: ${this.#flavor}.`);
  }
  
  #prepareDrink() {
    console.log(`Готовится напиток: ${this.name}`);
    console.log(`Заваривание чая: ${this.#flavor}`);
  }
  
  drinkInfo() {
    console.log(`Напиток: ${this.name}, Размер: ${this.size}, Цена: ${this.price}, Температура: ${this.temperature}, Вкус: ${this.#flavor}`);
  }
  
  serve() {
    this.#prepareDrink();
    return `${this.name} готов! Приятного аппетита!`;
  }  
}
