import React from 'react';
import { SaltProvider } from '@salt-ds/core';
import '@salt-ds/theme/index.css';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root missing!');
}
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <SaltProvider mode="dark">
      <App />
    </SaltProvider>
  </React.StrictMode>,
);
