import React from 'react';

const Navbar = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold">Chunshi Wang</div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'News', 'Publications', 'Awards'].map((item) => (
              <button
                key={item.toLowerCase()}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`${activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
