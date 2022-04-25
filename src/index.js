import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { JobTrackingProvider } from './JobTrackingContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <JobTrackingProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </JobTrackingProvider>
  
);


