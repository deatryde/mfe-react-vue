import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mount = (element: Element) => {
  const root = ReactDOM.createRoot(element!);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
