import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

function Header() {
  return (
    <header className="header">
      <h1><Link to="/">GTR</Link></h1>
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