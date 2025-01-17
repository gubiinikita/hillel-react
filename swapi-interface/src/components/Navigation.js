import React from 'react';

const Navigation = () => (
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
);

export default Navigation;
