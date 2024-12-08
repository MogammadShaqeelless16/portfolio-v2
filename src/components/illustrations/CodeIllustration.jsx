import React from 'react';

function CodeIllustration() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <rect width="200" height="200" rx="10" fill="#F3F4F6" />
      <path
        d="M60 100L80 80M60 100L80 120M60 100L140 100"
        stroke="#4B5563"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="100" cy="100" r="40" stroke="#3B82F6" strokeWidth="4" />
      <path
        d="M120 90L130 100L120 110M80 90L70 100L80 110"
        stroke="#3B82F6"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CodeIllustration;