// mainContent.js
import { increment } from './alls.js';

export function createMainContent() {
  const mainContent = document.createElement('main');
  mainContent.innerHTML = `
        <p id="counter" data-testid="counter">0</p>
        <button id="increment">Increment</button>
    `;

  const button = mainContent.querySelector('#increment');
  const counter = mainContent.querySelector('#counter');
  button.addEventListener('click', () => {
    increment(counter);
  });

  return mainContent;
}
