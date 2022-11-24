// ES Modules (ESM)
import { name, age } from './djatel.js';
import dmitri from './djatel.js';
import promptSync from 'prompt-sync';

var prompt = promptSync();

console.log(dmitri);
console.log(age);

dmitri.dolbitj();

var newName = prompt('New name?');

console.log('New name is ' + newName);