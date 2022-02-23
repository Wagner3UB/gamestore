export default class CategoriesState {
  constructor() {
    this.categoriesArray = [];
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
      func(this.categoriesArray);
    });
  };

  //Modules/Functions
  addCategory = (newCategory) => {
    this.categoriesArray.push(newCategory);
    this.notificate();
  };
  deleteCategory = (index) => {
    this.categoriesArray.splice(index, 1);
    this.notificate();
  };
}
