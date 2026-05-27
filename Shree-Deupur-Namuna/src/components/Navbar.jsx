import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/gallery/Logo of school.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Events & Activities', path: '/events' },
  ];

  return (
    <nav className="glass-nav sticky top-0 z-50 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Identity / Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-lg bg-white p-1 flex items-center justify-center border border-slate-200 shadow-sm group-hover:border-brand-gold transition-colors">
            <img 
              src={logoImg} 
              alt="Shree Deupur Namuna Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-sm md:text-base font-serif tracking-tight leading-tight group-hover:text-brand-gold transition-colors">
              Shree Deupur Namuna
            </span>
            <span className="text-[10px] text-slate-300 font-bold tracking-wider uppercase font-sans">
              English Secondary Boarding School
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'text-brand-navy bg-brand-gold shadow-md shadow-amber-500/20'
                    : 'text-slate-200 hover:text-brand-gold hover:bg-white/5'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bg-brand-navy border-b-2 border-brand-gold transition-all duration-350 ease-in-out origin-top z-40 ${
          isOpen ? 'opacity-100 scale-y-100 py-6' : 'opacity-0 scale-y-0 h-0 overflow-hidden pointer-events-none'
        }`}
      >
        <div className="px-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `w-full px-4 py-3 rounded text-sm font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-between ${
                  isActive
                    ? 'text-brand-navy bg-brand-gold'
                    : 'text-slate-200 hover:text-brand-gold hover:bg-white/5'
                }`
              }
            >
              <span>{link.name}</span>
              <span className="text-xs opacity-75">→</span>
            </NavLink>
          ))}
          <Link
            to="/admissions"
            onClick={closeMenu}
            className="w-full mt-4 py-3 text-center font-bold text-xs tracking-wider uppercase bg-brand-accent hover:bg-red-700 text-white rounded transition-all duration-200"
          >
            Admissions Directory
          </Link>
        </div>
      </div>
    </nav>
  );
}
