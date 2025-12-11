export class Cafe {
  constructor({name, location}) {
    this.name = name;
    this.location = location;
  }
  
  getCafeInfo() {
    return `Кафе: ${this.name}, Расположение: ${this.location}`;
  }
  
  orderDrink(drink) {
    console.log(`--- Заказ принят: ${drink.name} ---`);
    drink.presentDrink();
    const result = drink.serve();
    console.log(result);
    return result;
  }
} 
