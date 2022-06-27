import React from 'react';
import ReactDOM from 'react-dom/client';
import type { Root } from 'react-dom/client';
import { createBrowserHistory } from 'history';
import App from './App';

type mountType = (
  element: Element,
  { onNavigate }: { onNavigate?: () => void }
) => void;

const mount: mountType = (element, { onNavigate }): void => {
  const history = createBrowserHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  const root: Root = ReactDOM.createRoot(element!);
  root.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>
  );
};

if (process.env.NODE_ENV === 'development') {
  const devRoot: HTMLElement | null = document.getElementById('dev-root');

  if (devRoot) {
    mount(devRoot, {});
  }
}

export { mount };
