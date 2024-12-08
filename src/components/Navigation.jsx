import React from 'react';
import NavLink from './NavLink';

function Navigation() {
  const links = [
    { href: '#experience', text: 'Experience' },
    { href: '#projects', text: 'Projects' },
    { href: '#education', text: 'Education' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <div className="space-x-6">
      {links.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.text}
        </NavLink>
      ))}
    </div>
  );
}

export default Navigation;