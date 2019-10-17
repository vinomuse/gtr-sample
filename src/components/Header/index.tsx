import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

function Header() {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;