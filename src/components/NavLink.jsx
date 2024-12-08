import React from 'react';

function NavLink({ href, children }) {
  return (
    <a 
      href={href} 
      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
    >
      {children}
    </a>
  );
}

export default NavLink;