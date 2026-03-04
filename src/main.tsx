import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

// Fix for "Cannot set property fetch of #<Window> which has only a getter"
// This happens when libraries try to overwrite or bind window.fetch in certain environments.
try {
  if (window.fetch) {
    const originalFetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      value: originalFetch.bind(window),
      writable: true,
      configurable: true,
      enumerable: true
    });
  }
} catch (e) {
  // Ignore errors if we can't redefine fetch
}

import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
