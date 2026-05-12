'use client';

import Link from 'next/link';
import { User } from 'lucide-react';
import NavLink from './NavLink';

const MobileMenu = ({ isOpen, setIsOpen, navItems }) => {
  return (
    <>
     
      <div 
        className={`fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

   
      <div 
        className={`fixed top-0 right-0 z-[70] h-full w-72 bg-slate-900 border-l border-white/10 p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-white">Menu</span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 text-slate-400 hover:text-white transition-colors"
            >
              <span className="text-2xl">✕</span>
            </button>
          </div>
 
          <ul className="flex flex-col gap-4 mb-auto">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink 
                  href={item.href} 
                  className="text-lg py-2 block" 
                  onClick={() => setIsOpen(false)} //  
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

        
          <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
            <NavLink 
              href="/profile" 
              className="flex items-center gap-2 text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              <User size={20} />
              Profile
            </NavLink>

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-center text-slate-300 hover:text-cyan-400 py-2 text-lg font-medium transition-all"
            >
              Login
            </Link>

            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="text-center bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-cyan-500/20"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
