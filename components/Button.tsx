
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '' }) => {
  return (
    <a
      href="#"
      className={`inline-block bg-yellow-400 text-gray-900 font-extrabold tracking-wide py-4 px-10 text-lg rounded-md shadow-lg transform transition-transform duration-300 hover:bg-yellow-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50 ${className}`}
    >
      {children}
    </a>
  );
};
