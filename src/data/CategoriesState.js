export default class CategoriesState{
  constructor(){
    this.categoriesArray = [];
    this.subscribed = [];
  }
  subscribe = (func) => {
    this.subscribed.push(func);
  }
  unsubscribe = (func) => {
    this.subscribed = this.subscribed.filter( (f) => f !== func)
  }
  notificate = () => {
    this.subscribed.forEach((func) => {
      func(this.categoriesArray);
    })
  }
  
  addCategory = (newCategory) => {
    this.categoriesArray.push(newCategory);
    this.notificate();
  }
  /*   deleteCategory = (index) => {
    const newArrayCategories = this.state.categories;
    newArrayCategories.splice(index, 1);
    const newState = {...this.state, categories: newArrayCategories};
    this.setState(newState);
  }
  delete = (index) => {
    this.deleteCategory(index);
  } */
}