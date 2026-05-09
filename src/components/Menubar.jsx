'use client';

import Link from 'next/link';

import {
  Home,
  MapPin,
  Plane,
  Compass,
  User,
} from 'lucide-react';

const MobileMenu = ({
  isOpen,
  setIsOpen,
  navItems,
}) => {
  const icons = {
    Home,
    Destinations: MapPin,
    Bookings: Plane,
    Admin: Compass,
  };

  return (
    <div
      className={`md:hidden fixed top-0 right-0 z-40 h-screen w-[80%] bg-slate-950 border-l border-white/10 backdrop-blur-xl transition-all duration-300 ${
        isOpen
          ? 'translate-x-0'
          : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col p-8 pt-24 gap-7">
        {navItems.map((item) => {
          const Icon = icons[item.name];

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-xl font-semibold text-white hover:text-cyan-400 transition"
            >
              <Icon size={22} />
              {item.name}
            </Link>
          );
        })}

        <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
          <Link
            href="/profile"
            className="flex items-center justify-center gap-2 w-full text-center py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition"
          >
            <User size={18} />
            Profile
          </Link>

          <Link
            href="/login"
            className="w-full text-center py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="w-full text-center py-3 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;