'use client';
import { useEffect, useState } from 'react';

export function useMotionPreferences() {
  const [mounted, setMounted] = useState(false);
  const [preferences, setPreferences] = useState({
    prefersReducedMotion: false,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setMounted(true);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const width = window.innerWidth;

    setPreferences({
      prefersReducedMotion,
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1024,
      isDesktop: width >= 1024,
    });

    const handleResize = () => {
      const newWidth = window.innerWidth;
      setPreferences(prev => ({
        ...prev,
        isMobile: newWidth < 768,
        isTablet: newWidth >= 768 && newWidth < 1024,
        isDesktop: newWidth >= 1024,
      }));
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPreferences(prev => ({ ...prev, prefersReducedMotion: e.matches }));
    };

    window.addEventListener('resize', handleResize);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return {
    ...preferences,
    mounted,
    shouldDisableInfiniteAnimations: mounted && (preferences.prefersReducedMotion || preferences.isMobile),
    shouldReduceBlur: mounted && (preferences.isMobile || preferences.isTablet || preferences.prefersReducedMotion),
  };
}
