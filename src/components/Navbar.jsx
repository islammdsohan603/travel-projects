'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, User, X } from 'lucide-react';
import { Avatar } from '@heroui/react';
import NavLink from './NavLink';
import Menubar from './Menubar';
import { authClient } from '@/app/lib/auth-client';
 

const Navbar = () => {

  const {data:session, isPending} = authClient.useSession()

  const users = session?.user

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Destinations',
      href: '/adddestinations',
    },
    {
      name: 'Bookings',
      href: '/booking',
    },
    {
      name: 'Admin',
      href: '/admin',
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
        <nav className="w-11/12 max-w-7xl mx-auto flex items-center justify-between py-4">
          {/* Left Desktop Menu */}
          <ul className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink href={item.href}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/Wanderlast.png"
              alt="Wanderlust Logo"
              width={130}
              height={130}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink href="/profile" className='flex items-center gap-2'>
              <User size={16} />
              Profile
            </NavLink>

            {users ? <div className='flex items-center gap-2'>
              
                  <Avatar>
        <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src={users?.image} />
                <Avatar.Fallback>{ users?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>

              <button onClick={()=> authClient.signOut()} className='bg-red-500 px-4 py-2 rounded-full text-white hover:bg-red-600 cursor-pointer'>Logout</button>

         </div> :(
                <div>
              <Link
              href="/login"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Sign Up
            </Link>
          </div>
         )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white bg-white/10 p-2 rounded-xl"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <Menubar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navItems={navItems}
      />
    </>
  );
};

export default Navbar;