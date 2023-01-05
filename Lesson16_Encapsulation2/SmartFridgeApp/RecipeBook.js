const recipes = [];

export const addRecipe = (name, ingredients) => {
  const recipe = { recipeId: recipes.length + 1, name, ingredients };
  recipes.push(recipe);
}

export const removeRecipe = (name) => {
  const index = recipes.findIndex(recipe => recipe.name === name);
  recipes.splice(index, 1);
}

export const showRecipeList = () => {
  console.log('You have these recipes in your book: ');
  for (const recipe of recipes) {
    console.log(recipe.recipeId + ' ' + recipe.name);
  }
}

export const getIngredientsByRecipeName = (name) => {
  return recipes.find(recipe => recipe.name === name);
}

export const getRecipesByIngredients = (ingredientNames) => {
  return recipes.filter(recipe => {
    const checkedIngredients = [];
    let matchingIngredientCount = 0;    
    for (const name of ingredientNames) {
      if (recipe.ingredients.includes(name) && !checkedIngredients.includes(name)) {
        matchingIngredientCount++;
      }
      checkedIngredients.push(name);
    }
    return matchingIngredientCount === recipe.ingredients.length;
  });
}