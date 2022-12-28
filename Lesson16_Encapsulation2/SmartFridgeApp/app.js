import { addIngridient, removeIngridient, getIngridients, addTestData } from './Fridge.js';
import { getRecipeByName, getRecipesByIngridients } from './RecipeBook.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let isRunning = true;
const actionFunctions = {
  add: addIngridient,
  remove: removeIngridient,
  cook: (name) => {
    const recipe = getRecipeByName(name);
    console.log('For ' + name + ' you need: ' + recipe.ingridients);
  },
  recipes: (names) => {
    const ingridientNames = names.split(',');
    const recipes = getRecipesByIngridients(ingridientNames);
    console.log('With ' + names + ' you can cook: ' + recipes.map(recipe => recipe.name));
  },
  stop: () => {
    isRunning = false;
  }
}

addTestData();

while(isRunning) {
  const input = prompt('What?: ');
  const [action, subject] = input.split(' ');

  actionFunctions[action](subject);
}

const myIngridients = getIngridients();
console.log(myIngridients);