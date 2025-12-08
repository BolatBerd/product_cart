class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
  getInfo() {
    return `${this.name} - ${this.price} руб. Описание: ${this.description}`;
  }
}

class Laptop extends Product { 
  constructor (name, price, description, processor, ram) {
    super(name, price, description);
    this.processor = processor;
    this.ram = ram; 
  }
  getInfo() {
    return `${super.getInfo()} . Процессор: ${this.processor}, ОЗУ: ${this.ram} ГБ`;
  }
}

class Smartphone extends Product {
  constructor (name, price, description, screenSize, battery) {
    super(name, price, description);
    this.screenSize = screenSize;
    this.battery = battery; 
  }
}

const laptopMac = new Laptop ('MacBook Pro', 150000, 'Мощный ноутбук', 'M2 Pro', 16, 512);
const smartphoneIphone = new Smartphone ('iPhone 15', 90000, 'Флагман Apple', 6.1, 3500);
const products = [laptopMac, smartphoneIphone];


products.forEach(p => console.log(p.getInfo()));
