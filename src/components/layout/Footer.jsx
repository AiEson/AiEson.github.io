import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Chunshi Wang. All rights reserved.
          <span className="mx-2">|</span>
          <a href="mailto:c.s.wang@foxmail.com" className="text-blue-600 hover:underline">
            Contact
          </a>
          <span className="mx-2">|</span>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
