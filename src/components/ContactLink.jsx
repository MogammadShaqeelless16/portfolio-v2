import React from 'react';

function ContactLink({ icon: Icon, href, text }) {
  return (
    <div className="flex items-center space-x-3">
      <Icon className="text-blue-600" />
      <a href={href} className="text-gray-700 hover:text-blue-600">
        {text}
      </a>
    </div>
  );
}

export default ContactLink;