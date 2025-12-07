class Product {
  constructor(name, price, description) {
    this.name= name;
    this.price = price;
    this.description = description;
  }
  getInfo() {
    return `${this.name} - ${this.price} руб. Описание: ${this.description}`;
  }
}
const computer1 = new Product(
  'Ноутбук HP',
  55000,
  'Мощный ноутбук для работы и игр',
  true
);

const computer2 = new Product(
  'Ноутбук Asus',
  50000,
  'Мощный ноутбук для работы',
  false
);

console.log(computer1.getInfo());

console.log(computer2.getInfo());

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

class Smartphone extends Product { constructor (name, price, description, screenSize, battery) {
    super(name, price, description);
    this.screenSize = screenSize;
    this.battery = battery; 
  }
}

const products = [
  new Laptop('MacBook Pro', 150000, 'Мощный ноутбук', 'M2 Pro', 16, 512),
  new Smartphone('iPhone 15', 90000, 'Флагман Apple', 6.1, 3500),
];

products.forEach(p => console.log(p.getInfo()));