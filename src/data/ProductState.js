
export default class ProductState{
  constructor(){
    this.productsArray = [];
    this.subscribed = [];
  }
  subscribe = (func) => {
    this.subscribed.push(func);
  }
  unsubscribe = (func) => {
    this.subscribed = this.subscribed.filter( f => f !== func)
  }
  notificate = () => {
    this.subscribed.forEach((func) => {
      func(this.categories);
    })
  }
  addProduct = (name, description, price, category) => {
    const newProduct = new Product(name, description, price, category);
    this.productsArray.push(newProduct);
    this.notificate();
  }
  deleteProduct = (index) => {
    this.productsArray.splice(index, 1);
    this.notificate();
  }
}

class Product {
  constructor(name, description, price, category){
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
  }
}