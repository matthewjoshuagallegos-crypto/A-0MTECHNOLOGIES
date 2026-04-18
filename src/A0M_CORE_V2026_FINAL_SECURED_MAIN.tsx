import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './A0M_CORE_V2026_FINAL_SECURED_APP';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

ReactDOM.createRoot(document.getElementById('a0m-root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
