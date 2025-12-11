export class Drink {
  #temperature;
  
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  
  presentDrink() {
    console.log(`${this.name} размер ${this.size} напитка, температура ${this.#temperature}, и цена ${this.price}.`);
  }
  
  #prepareDrink() {
    console.log(`Готовится напиток: ${this.name}`);
  }
  
  getTemperatureDrink() {
    return this.#temperature;
  }
  
  #setTemperatureDrink(temp) {
    this.#temperature = temp;
  }
  
  setTemperature(temp = 'теплый') {
    this.#setTemperatureDrink(temp);
  }
  
  showDrinkInfo() {
    console.log(`Напиток: ${this.name}, Размер: ${this.size}, Цена: ${this.price}, Температура: ${this.#temperature}`);
  }
  
  serve() {
    this.#prepareDrink();
    return `${this.name} готов! Приятного аппетита!`;
  }
}
