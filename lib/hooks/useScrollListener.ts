'use client';

import { useEffect, useState } from 'react';

export function useScrollListener(threshold: number = 50) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Use ref to track RAF ID for throttling
    let rafId: number | null = null;

    const handleScroll = () => {
      // Skip if RAF already scheduled (throttling)
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setIsScrolled(scrollTop > threshold);
        rafId = null;
      });
    };

    // Set initial state
    handleScroll();

    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        // Cancel any pending RAF
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
      };
    }
  }, [threshold]);

  return isScrolled;
}
