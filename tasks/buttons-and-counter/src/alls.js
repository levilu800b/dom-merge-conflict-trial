// utils.js
export function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

export function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}
