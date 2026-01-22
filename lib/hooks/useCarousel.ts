'use client';

import { useState, useEffect, useCallback } from 'react';
import { useBreakpoint } from './useBreakpoint';
import { useMotionPreferences } from './useMotionPreferences';
import type { CarouselConfig } from '@/types';

interface UseCarouselReturn {
  currentIndex: number;
  itemsPerView: number;
  maxIndex: number;
  next: () => void;
  previous: () => void;
  goTo: (index: number) => void;
  handleDragEnd: (event: any, info: any) => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

/**
 * Custom hook for carousel state management
 * Handles navigation, drag gestures, and keyboard controls
 *
 * @param totalItems - Total number of items in the carousel
 * @param config - Carousel configuration object
 * @returns Carousel state and control methods
 */
export function useCarousel(
  totalItems: number,
  config: CarouselConfig
): UseCarouselReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile, isTablet } = useBreakpoint();
  const { prefersReducedMotion } = useMotionPreferences();

  // Calculate items per view based on current breakpoint
  const itemsPerView = isMobile
    ? config.itemsPerView.mobile
    : isTablet
    ? config.itemsPerView.tablet
    : config.itemsPerView.desktop;

  // Calculate maximum index (prevents over-scrolling)
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Reset to valid index when breakpoint changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Navigation methods with boundary handling
  const next = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const previous = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex]
  );

  // Drag gesture handler with velocity detection
  const handleDragEnd = useCallback(
    (event: any, info: any) => {
      const threshold = 30; // Minimum drag distance in pixels
      const offset = info.offset.x;
      const velocity = info.velocity.x;

      // Trigger navigation based on drag direction
      // Use lower threshold (30px) or velocity (300px/s)
      if (Math.abs(offset) > threshold || Math.abs(velocity) > 300) {
        if (offset > 0 || velocity > 0) {
          // Swiped right - go to previous
          previous();
        } else {
          // Swiped left - go to next
          next();
        }
      }
    },
    [next, previous]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if not typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          previous();
          break;
        case 'ArrowRight':
          e.preventDefault();
          next();
          break;
        case 'Home':
          e.preventDefault();
          goTo(0);
          break;
        case 'End':
          e.preventDefault();
          goTo(maxIndex);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, previous, goTo, maxIndex]);

  return {
    currentIndex,
    itemsPerView,
    maxIndex,
    next,
    previous,
    goTo,
    handleDragEnd,
    canGoNext: currentIndex < maxIndex,
    canGoPrevious: currentIndex > 0,
  };
}
