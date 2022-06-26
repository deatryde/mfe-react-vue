import React from 'react';
import ReactDOM from 'react-dom/client';
import type { Root } from 'react-dom/client';
import App from './App';

const mount = (element: Element): void => {
  const root: Root = ReactDOM.createRoot(element!);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (process.env.NODE_ENV === 'development') {
  const devRoot: HTMLElement | null = document.getElementById('root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
