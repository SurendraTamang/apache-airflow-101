// Import essential React dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import our main App component that will contain the presentation
import App from './App';

// Import our Tailwind CSS styles
import './index.css';

// Create and inject our React application into the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode helps identify potential problems in the application
  // It renders components twice in development to detect side effects
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);