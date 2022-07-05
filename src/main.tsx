import React from 'react';
import ReactDOM from 'react-dom/client';
import { TemplateProvider } from 'src/context/TemplateContext';
import { App } from './App';

import './global.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TemplateProvider>
      <App />
    </TemplateProvider>
  </React.StrictMode>
);
