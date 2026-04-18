import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './ConsoleOS';
import ErrorBoundary from './components/ErrorBoundary';
import { AppProvider } from './core/A0MContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('a0m-root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppProvider>
        <App />
      </AppProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
