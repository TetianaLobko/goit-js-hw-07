const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const newListRef = document.querySelector('#ingredients');

const createList = ingredients.map(ingredient => {
    const listRef = document.createElement('li');
    listRef.textContent = ingredient;
    return listRef;
    
});

newListRef.append(...createList);