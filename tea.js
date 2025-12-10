import { Drink } from './drink.js';

export class Tea extends Drink {
  #typeTea;
  #hasLemon;
  #temperature;
  
  constructor({name, size, price, temperature, typeTea, hasLemon}) {
    super(name, size, price, temperature);
    this.#typeTea = typeTea;
    this.#hasLemon = hasLemon;
    this.#temperature = temperature;
  }
  
  presentDrink() {
    console.log(`${this.name} размер ${this.size} напитка, температура ${this.#temperature}, и цена ${this.price}.`);
  }
  
  #prepareDrink() {
    console.log(`Готовится напиток: ${this.name}`);
    console.log(`Заваривание чая: ${this.#typeTea}`);
    console.log(`Добавление лимона: ${this.#hasLemon}`);
  }
  
  drinkInfo() {
    console.log(`Напиток: ${this.name}, Размер: ${this.size}, Цена: ${this.price}, Температура: ${this.#temperature}, Тип чая: ${this.#typeTea}, С лимоном: ${this.#hasLemon}`);
  }
  
  serve() {
    this.#prepareDrink();
    return `${this.name} готов! Приятного аппетита!`;
  }  
}
