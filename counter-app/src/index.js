import React from 'react';
import { createRoot } from 'react-dom/client'; // Правильний імпорт для React 18+
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Створюємо корінь

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);