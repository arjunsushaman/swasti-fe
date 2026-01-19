'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '@/lib/constants';
import { NavItem } from '@/types';

interface NavigationProps {
  mobile?: boolean;
  onNavigate?: () => void;
  isTransparent?: boolean;
}

export default function Navigation({ mobile = false, onNavigate, isTransparent = false }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleLinkClick = (href: string) => {
    setOpenDropdown(null);

    // Handle smooth scroll for anchor links
    if ((href === '/#contact' || href === '/#services') && pathname === '/') {
      const targetId = href.replace('/#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

    onNavigate?.();
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const renderNavItem = (item: NavItem) => {
    const hasChildren = item.children && item.children.length > 0;
    const active = isActive(item.href);

    // Define color classes based on transparent state
    const textColorClass = isTransparent
      ? active
        ? 'text-secondary-900 font-semibold'
        : 'text-secondary-800 hover:text-secondary-900'
      : active
      ? 'text-primary-600 font-semibold'
      : 'text-secondary-700 hover:text-primary-600';

    if (hasChildren) {
      return (
        <div key={item.label} className={mobile ? 'relative' : 'relative group'}>
          <button
            onClick={() => handleDropdownToggle(item.label)}
            className={`flex items-center gap-1.5 ${
              mobile
                ? `w-full py-3 px-4 text-left rounded-lg hover:bg-primary-50 ${textColorClass} transition-all duration-200`
                : `px-4 py-2 ${textColorClass} transition-all duration-200 font-medium rounded-lg ${
                    isTransparent ? 'hover:bg-secondary-900/5' : 'hover:bg-primary-50/50'
                  } relative group`
            }`}
            aria-expanded={openDropdown === item.label}
            aria-haspopup="true"
          >
            {item.label}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
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
            {!mobile && (
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-300 ${
                isTransparent ? 'bg-secondary-900' : 'bg-primary-600'
              }`} />
            )}
          </button>
          {(mobile ? openDropdown === item.label : true) && (
            <motion.div
              initial={mobile ? { opacity: 0, height: 0 } : undefined}
              animate={mobile ? { opacity: 1, height: 'auto' } : undefined}
              className={
                mobile
                  ? 'pl-6 mt-2 space-y-1 overflow-hidden'
                  : 'absolute left-0 mt-3 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-primary-100/50 py-3 px-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 z-50'
              }
            >
              {item.children!.map((child, index) => (
                <motion.div
                  key={child.href}
                  initial={!mobile ? { opacity: 0, x: -10 } : undefined}
                  animate={!mobile ? { opacity: 1, x: 0 } : undefined}
                  transition={!mobile ? { delay: index * 0.05 } : undefined}
                >
                  <Link
                    href={child.href}
                    scroll={child.href === '/#contact' || child.href === '/#services' ? false : undefined}
                    onClick={(e) => {
                      if ((child.href === '/#contact' || child.href === '/#services') && pathname === '/') {
                        e.preventDefault();
                      }
                      handleLinkClick(child.href);
                    }}
                    className={
                      mobile
                        ? 'block py-2.5 px-4 rounded-lg text-secondary-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200'
                        : 'block px-4 py-2.5 rounded-lg text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200 font-medium group/item'
                    }
                  >
                    <span className="flex items-center gap-2">
                      {!mobile && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      )}
                      {child.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.href}
        href={item.href}
        scroll={item.href === '/#contact' || item.href === '/#services' ? false : undefined}
        onClick={(e) => {
          if ((item.href === '/#contact' || item.href === '/#services') && pathname === '/') {
            e.preventDefault();
          }
          handleLinkClick(item.href);
        }}
        className={
          mobile
            ? `block py-3 px-4 rounded-lg ${textColorClass} transition-all duration-200 hover:bg-primary-50 ${
                active ? 'bg-primary-50' : ''
              }`
            : `relative px-4 py-2 ${textColorClass} transition-all duration-200 font-medium rounded-lg ${
                isTransparent ? 'hover:bg-secondary-900/5' : 'hover:bg-primary-50/50'
              } group`
        }
      >
        {item.label}
        {!mobile && (
          <span
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-300 ${
              isTransparent ? 'bg-secondary-900' : 'bg-primary-600'
            } ${active ? 'w-3/4' : 'w-0 group-hover:w-3/4'}`}
          />
        )}
      </Link>
    );
  };

  return (
    <nav
      className={mobile ? 'flex flex-col space-y-2' : 'hidden md:flex items-center space-x-2 lg:space-x-3'}
      role="navigation"
      aria-label="Main navigation"
    >
      {NAV_ITEMS.map(renderNavItem)}
    </nav>
  );
}
