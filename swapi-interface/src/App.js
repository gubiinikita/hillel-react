import React from 'react';
import './styles.css';

const App = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <header className="text-center mb-4">
        <h1 className="display-4">SWAPI Interface</h1>
        <p className="lead">Explore the Star Wars universe.</p>
      </header>

      {/* Navigation  */}
      <nav className="mb-4">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#people">
              Characters
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#planets">
              Planets
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#starships">
              Starships
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#vehicles">
              Vehicles
            </a>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <main>
        <section id="people" className="mb-5">
          <h2 className="mb-3">Characters</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Character Name</h5>
                  <p className="card-text">Details about the character will appear here.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="planets" className="mb-5">
          <h2 className="mb-3">Planets</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Planet Name</h5>
                  <p className="card-text">Details about the planet will appear here.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="starships" className="mb-5">
          <h2 className="mb-3">Starships</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Starship Name</h5>
                  <p className="card-text">Details about the starship will appear here.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vehicles" className="mb-5">
          <h2 className="mb-3">Vehicles</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Vehicle Name</h5>
                  <p className="card-text">Details about the vehicle will appear here.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-3">
        <small>© 2025 Star Wars API Interface. All rights reserved. May the force be with you.</small>
      </footer>
    </div>
  );
};

export default App;
