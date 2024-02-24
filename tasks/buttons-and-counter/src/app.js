// App.js
import { createHeader } from './header';
import { createMainContent } from './mainContent';

export function App() {
  const body = document.createElement('body');

  const header = createHeader();
  body.appendChild(header);

  const mainContent = createMainContent();
  body.appendChild(mainContent);

  return body;
}
