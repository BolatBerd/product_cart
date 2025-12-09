export class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  
  presentDrink() {
    return ` ${this.name} размер ${this.size} напитка, температура ${this.#temperature}, и цена ${this.price}.`;
  }
  
  #prepareDrink() {
    return `Готовится напиток: ${this.name}`;
  }
  
  getTemperatureDrink() {
    return this.#temperature;
  }
  
  #setTemperatureDrink(temp) {
    this.#temperature = temp;
  }
  
  setNewTemperatureDrink(temp = 'теплый') {
    this.#setTemperatureDrink(temp);
  }
  
  getInformationDrink() {
    return `Напиток: ${this.name}, Размер: ${this.size}, Цена: ${this.price}, Температура: ${this.#temperature}`;
  }
}
