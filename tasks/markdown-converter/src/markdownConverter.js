export function markdownToHTMLElement(markdown) {
  const container = document.createElement("div");
  const lines = markdown.split("\n");

  lines.forEach((line) => {
    if (line) {
      const p = document.createElement("p");
      p.textContent = line;

      container.appendChild(p);
    }
  });

  return container;
}
