const ingridients = [];

export const addIngridient = (name) => {
  ingridients.push(name);
}

export const removeIngridient = (name) => {
  if (!ingridients.includes(name)) {
    return;
  } 
  const index = ingridients.indexOf(name);
  ingridients.splice(index, 1);
}

export const getIngridients = () => {
  return ingridients;
}

export const addTestData = () => {
  addIngridient('Bacon');
  addIngridient('Egg');
  addIngridient('Oil');
  addIngridient('Milk');
}