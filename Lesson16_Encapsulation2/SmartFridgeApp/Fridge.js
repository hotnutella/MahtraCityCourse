const ingredients = [];

export const addIngredient = (name) => {
  ingredients.push(name);
}

export const removeIngredient = (name) => {
  if (!ingredients.includes(name)) {
    return;
  } 
  const index = ingredients.indexOf(name);
  ingredients.splice(index, 1);
}

export const getIngredients = () => {
  return ingredients;
}

export const addTestData = () => {
  addIngredient('Bacon');
  addIngredient('Egg');
  addIngredient('Oil');
  addIngredient('Milk');
}