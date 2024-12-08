import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Shaqeel Less</h1>
          <Navigation />
        </div>
      </nav>
    </header>
  );
}

export default Header;