'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children, className = '' }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        relative text-sm font-medium transition-all duration-300
        ${
          isActive
            ? 'text-cyan-400'
            : 'text-slate-300 hover:text-cyan-400'
        }
        ${className}
      `}
    >
      {children}

      <span
        className={`
          absolute left-0 -bottom-1 h-[2px] rounded-full bg-cyan-400 transition-all duration-300
          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
        `}
      ></span>
    </Link>
  );
};

export default NavLink;