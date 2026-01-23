'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import { useScrollListener } from '@/lib/hooks/useScrollListener';
import { useMotionPreferences } from '@/lib/hooks/useMotionPreferences';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const { prefersReducedMotion, isMobile } = useMotionPreferences();
  const threshold = isMobile ? 30 : 50;
  const isScrolled = useScrollListener(threshold);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isHomecarePage = pathname === '/homecare';
  const shouldBeTransparent = (isHomePage || isHomecarePage) && !isScrolled && !mobileMenuOpen;
  const headerRef = useRef<HTMLDivElement>(null);

  // Track active section based on scroll position for hash links
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    // Check initial hash on page load
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    );

    // Observe sections
    const sections = ['services', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '');
      if (newHash) {
        setActiveSection(newHash);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname]);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll when menu is closed
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`
        fixed top-0 w-full z-50 transition-all ease-in-out
        ${prefersReducedMotion ? 'duration-100' : (isMobile ? 'duration-300' : 'duration-500')}
        ${shouldBeTransparent
          ? 'bg-transparent shadow-none'
          : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100/20'
        }
      `}
    >
      {/* Main header */}
      <div className="container-custom">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          shouldBeTransparent ? 'py-3' : 'py-2 lg:py-3'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo-swasti.png"
              alt="Swasti Lifecare"
              width={140}
              height={66}
              className={`w-auto transition-all duration-300 group-hover:scale-105 ${
                shouldBeTransparent ? 'h-12 lg:h-14' : 'h-11 lg:h-12'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <Navigation
            isTransparent={shouldBeTransparent}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            {!prefersReducedMotion ? (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/booking"
                  className={`inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-xl group
                    ${shouldBeTransparent
                      ? 'bg-primary-600 text-white hover:bg-primary-700 border-2 border-primary-600'
                      : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800'
                    }
                  `}
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Appointment
                </Link>
              </motion.div>
            ) : (
              <Link
                href="/booking"
                className={`inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-xl group
                  ${shouldBeTransparent
                    ? 'bg-primary-600 text-white hover:bg-primary-700 border-2 border-primary-600'
                    : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800'
                  }
                `}
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </Link>
            )}
          </div>

          {/* Mobile/Tablet menu button */}
          <motion.button
            whileTap={prefersReducedMotion ? undefined : { scale: 0.9 }}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              shouldBeTransparent
                ? 'text-secondary-900 hover:bg-secondary-900/5'
                : 'text-secondary-600 hover:bg-primary-50 hover:text-primary-600'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile/Tablet Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-md"
            >
              <div className="py-6 px-2 border-t border-primary-100/50 bg-gradient-to-b from-white via-primary-50/20 to-primary-50/40 rounded-b-2xl shadow-lg">
                <Navigation
                  mobile
                  onNavigate={() => setMobileMenuOpen(false)}
                  isTransparent={false}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                />
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 pt-6 border-t border-primary-100/50"
                >
                  <Link
                    href="/booking"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3.5 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Appointment
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
