import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="logo" href="/">
        LOGO
      </a>
      <ul className="item">
        <li>
          <a className="link" href="/login">
            Log In
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
