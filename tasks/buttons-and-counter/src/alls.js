// utils.js
export function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}
