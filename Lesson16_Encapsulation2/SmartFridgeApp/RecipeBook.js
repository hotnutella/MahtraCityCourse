const recipes = [
  {
    recipeId: 1,
    name: 'FriedBacon',
    ingridients: ['Oil', 'Bacon']
  },
  {
    recipeId: 2,
    name: 'Omelette',
    ingridients: ['Oil', 'Eggs', 'Milk']
  }
];

export const addRecipe = () => {
  // not implemented 
}

export const removeRecipe = () => {
  // not implemented 
}

export const getRecipeByName = (name) => {
  return recipes.find(recipe => recipe.name === name);
}

export const getRecipesByIngridients = (ingridientNames) => {
  return recipes.filter(recipe => {
    let suitable = true;
    // TODO why Milk makes Omelette
    for (const name of ingridientNames) {
      suitable = suitable && recipe.ingridients.includes(name);
      console.log(suitable);
    }
    return suitable;
  });
}