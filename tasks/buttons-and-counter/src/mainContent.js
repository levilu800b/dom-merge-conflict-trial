// mainContent.js
import { increment, decrement } from './alls.js';

export function createMainContent() {
  const mainContent = document.createElement('main');
  mainContent.innerHTML = `
        <p id="counter" data-testid="counter">0</p>
        <button id="increment">Increment</button>
        <button id="decrement">Decrement</button>
    `;

  const incrementButton = mainContent.querySelector('#increment');
  const decrementButton = mainContent.querySelector('#decrement');
  const counter = mainContent.querySelector('#counter');

  incrementButton.addEventListener('click', () => {
    increment(counter);
  });

  decrementButton.addEventListener('click', () => {
    decrement(counter);
  });

  return mainContent;
}
