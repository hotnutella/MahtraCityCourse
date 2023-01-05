import { 
  getIngredientsByRecipeName, 
  getRecipesByIngredients, 
  addRecipe, 
  removeRecipe, 
  showRecipeList 
} from './RecipeBook.js';
import { addIngredient, removeIngredient, getIngredients } from './Fridge.js';

const controller = {
  action: (input) => {
    const params = input.split(' ');
    const action = params[0];
    const parameters = params.slice(1, params.length).join(' ');

    if (controller[action]) {
      controller[action](parameters);
    }
  },
  addIngredient,
  addIngredients: (names) => {
    const ingredients = names.split(',');
    for (const ingredient of ingredients) {
      controller.addIngredient(ingredient);
    }
  },
  removeIngredient,
  fridge: () => {
    const fridgeIngredients = getIngredients();
    console.log(fridgeIngredients);
  },
  addRecipe: (input) => {
    const data = input.split(' ');
    const name = data[0];
    const ingredients = data[1].split(',');
    addRecipe(name, ingredients);
  },
  removeRecipe,
  book: showRecipeList,
  cook: (name) => {
    const recipe = getIngredientsByRecipeName(name);
    console.log('For ' + name + ' you need: ' + recipe.ingredients);
  },
  recipes: (names) => {
    const ingredientNames = names.split(',');
    const recipes = getRecipesByIngredients(ingredientNames);
    console.log('With ' + names + ' you can cook: ' + recipes.map(recipe => recipe.name));
  },
  availableRecipes: () => {
    const ingredients = getIngredients();
    controller.recipes(ingredients.join(','));
  }
}

// controller.stop();
// controller['stop']();

export default controller;