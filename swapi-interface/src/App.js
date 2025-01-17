import React from 'react';
import './styles.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="container py-5">
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
