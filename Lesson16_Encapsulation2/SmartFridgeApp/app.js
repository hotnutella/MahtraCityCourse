import controller from './Controller.js';

import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let isRunning = true;
while(isRunning) {
  const input = prompt('What?: ');
  if (input === 'stop') {
    isRunning = false;
    break;
  }
  controller.action(input);
}