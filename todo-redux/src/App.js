import React from 'react';
import Todos from './features/todos/Todos';
import Footer from './Footer';

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <Todos />
      <Footer />
    </div>
  );
}

export default App;