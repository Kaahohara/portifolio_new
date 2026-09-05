import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#/' },
    { name: 'Projects', href: '#/projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-full bg-transparent text-white py-4 px-6 flex justify-between items-center relative z-50">
      <a href="#/">
        <div className="text-2xl font-bold tracking-tighter">
          KARINA<span className="dark:text-[#9A37B0] text-slate-600">OHARA</span>
        </div>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 items-center">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a 
              href={item.href} 
              className="dark:hover:text-[#9A37B0] hover:text-slate-600 transition-colors font-medium tracking-wide"
            >
              {item.name}
            </a>
          </li>
        ))}
        <li>
          <button className="border-2 border-white dark:border-[#9A37B0] px-5 py-1.5 rounded-full hover:text-slate-600 dark:text-white hover:bg-white dark:hover:bg-[#9A37B0] transition-all">
            Resume
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a1a1a] border-t border-gray-800 flex flex-col p-6 gap-4 md:hidden">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-xl hover:text-slate-500 dark:hover:text-[#9A37B0]"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;