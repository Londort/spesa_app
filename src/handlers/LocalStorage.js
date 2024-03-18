import { v4 as uuidv4 } from 'uuid';

const categories = [
  'latte & formaggi',
  'carni & salumi',
  'pane & pasta',
  'verdure & ortaggi',
  'frutta',
  'aqua & bevande',
  'dolci',
  'altro',
];
let categoryList = categories.map((category) => {
  return {
    id: uuidv4(),
    name: category,
  };
});

const LocalStorage = {
  setCategories() {
    localStorage.setItem('SpesApp', JSON.stringify(categoryList));
  },
  getCategories() {
    return JSON.parse(localStorage.getItem('SpesApp'));
  },
};

export default LocalStorage;
