import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SectionProvider } from './context/NavigationSection';
import { DataProvider } from './context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SectionProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </SectionProvider>
  </React.StrictMode>
);
