'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/constants';
import { NavItem } from '@/types';

interface NavigationProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

export default function Navigation({ mobile = false, onNavigate }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
    onNavigate?.();
  };

  const renderNavItem = (item: NavItem) => {
    const hasChildren = item.children && item.children.length > 0;

    if (hasChildren) {
      return (
        <div key={item.label} className={mobile ? 'relative' : 'relative group'}>
          <button
            onClick={() => handleDropdownToggle(item.label)}
            className={`flex items-center gap-1 ${
              mobile
                ? 'w-full py-2 text-left text-secondary-700 hover:text-primary-600'
                : 'px-3 py-2 text-secondary-700 hover:text-primary-600 transition-colors'
            }`}
            aria-expanded={openDropdown === item.label}
            aria-haspopup="true"
          >
            {item.label}
            <svg
              className={`w-4 h-4 transition-transform ${
                openDropdown === item.label ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {(mobile ? openDropdown === item.label : true) && (
            <div
              className={
                mobile
                  ? 'pl-4 space-y-1'
                  : 'absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'
              }
            >
              {item.children!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={handleLinkClick}
                  className={
                    mobile
                      ? 'block py-2 text-secondary-600 hover:text-primary-600'
                      : 'block px-4 py-2 text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-colors'
                  }
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={handleLinkClick}
        className={
          mobile
            ? 'block py-2 text-secondary-700 hover:text-primary-600'
            : 'px-3 py-2 text-secondary-700 hover:text-primary-600 transition-colors'
        }
      >
        {item.label}
      </Link>
    );
  };

  return (
    <nav
      className={mobile ? 'flex flex-col space-y-1' : 'hidden md:flex items-center space-x-1'}
      role="navigation"
      aria-label="Main navigation"
    >
      {NAV_ITEMS.map(renderNavItem)}
    </nav>
  );
}
