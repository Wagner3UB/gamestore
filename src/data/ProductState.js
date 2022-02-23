export default class ProductState {
  constructor() {
    this.productsArray = [];
    this.subscribed = [];
  }
  //State Control
  subscribe = (func) => {
    this.subscribed.push(func);
  };
  unsubscribe = (func) => {
    this.subscribed = this.subscribed.filter((f) => f !== func);
  };
  notificate = () => {
    this.subscribed.forEach((func) => {
      func(this.categories);
    });
  };
  //Modules/Functions
  addProduct = (name, description, price, category) => {
    const newProduct = new Product(name, description, price, category);
    this.productsArray.push(newProduct);
    this.notificate();
  };
  deleteProduct = (index) => {
    this.productsArray.splice(index, 1);
    this.notificate();
  };
  deleteCategoryFromProduct = (categoryName) => {
    this.productsArray = this.productsArray.map((e) => {
      if (e.category === categoryName) {
        e.category = "uncategorized";
      }
      return e;
    });
    this.notificate();
  };
}

class Product {
  constructor(name, description, price, category) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
  }
}
