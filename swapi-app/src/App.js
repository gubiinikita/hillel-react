import React from 'react';
import DataList from './components/DataList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>SWAPI App</h1>
      <DataList />
      <Footer />
    </div>
  );
}

export default App;