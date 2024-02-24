//increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

//decrements the number in a node's text
function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App() {
  const body = document.createElement('body');

  const header = document.createElement('header');
  header.innerHTML = `
        <h1>Number Counter</h1>
        <p>A simple counter. Press increment to increase the count by one. Press decrement to decrease the count by one.</p>
    `;
  body.appendChild(header);

  const buttonAndCounter = document.createElement('main');
  buttonAndCounter.innerHTML = `
        <p id="counter" data-testid="counter">0</p>
        <button id="increment">Increment</button>
        <button id="decrement">Decrement</button>
    `;
  body.appendChild(buttonAndCounter);

  const incrementButton = body.querySelector('#increment');
  const decrementButton = body.querySelector('#decrement');
  const counter = body.querySelector('#counter');

  incrementButton.addEventListener('click', () => {
    increment(counter);
  });

  decrementButton.addEventListener('click', () => {
    decrement(counter);
  });

  return body;
}
