'use client';
import Link from 'next/link';
import { useState } from 'react';
import './Navbar.scss';
import ChevronDown from '../Icons/ChevronDown';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false); // Cierra el dropdown al abrir/cerrar el menú
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="menu-container">
      <div className="logo-container">
        <Link href="/">
          <img src="/Images/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={menuOpen ? 'line open' : 'line'}></div>
        <div className={menuOpen ? 'line open' : 'line'}></div>
        <div className={menuOpen ? 'line open' : 'line'}></div>
      </div>
      <div className={`search-container ${menuOpen ? 'open' : ''}`}>
        {menuOpen && (
          <button className="close-button" onClick={toggleMenu}>X</button>
        )}
        <nav>
          <ul>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li className="dropdown" onClick={toggleDropdown}>
              <div className="dropdown-toggle">
                Services <ChevronDown size="xm" />
              </div>
              {(dropdownOpen || menuOpen) && (
                <ul className="dropdown-content">
                  <li><Link href="/services/landscaping">Landscaping</Link></li>
                  <li><Link href="/services/maintenance">Maintenance</Link></li>
                  <li><Link href="/services/design">Design</Link></li>
                  <li><Link href="/services/consulting">Consulting</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/contractors">Contractors</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;




