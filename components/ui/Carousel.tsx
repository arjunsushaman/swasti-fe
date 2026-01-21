'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useCarousel } from '@/lib/hooks/useCarousel';
import { useMotionPreferences } from '@/lib/hooks/useMotionPreferences';
import { useBreakpoint } from '@/lib/hooks/useBreakpoint';
import { getTotalPages } from '@/lib/utils/carousel';
import CarouselDots from './CarouselDots';
import type { CarouselConfig } from '@/types';

interface CarouselProps {
  children: ReactNode[];
  config: CarouselConfig;
  className?: string;
  ariaLabel?: string;
}

/**
 * Main carousel component with touch gestures, keyboard navigation, and accessibility
 *
 * Features:
 * - Responsive: Desktop shows grid, mobile/tablet shows carousel
 * - Touch gestures: Swipe with velocity detection
 * - Keyboard navigation: Arrow keys, Home, End
 * - Accessibility: Full ARIA support
 * - Performance: GPU-accelerated animations, respects reduced motion
 * - SEO-friendly: All content in DOM
 *
 * @param children - Array of items to display in carousel
 * @param config - Carousel configuration
 * @param className - Additional CSS classes
 * @param ariaLabel - Accessibility label for carousel region
 */
export default function Carousel({
  children,
  config,
  className = '',
  ariaLabel = 'Carousel',
}: CarouselProps) {
  const totalItems = children.length;
  const { prefersReducedMotion, isMobile } = useMotionPreferences();
  const { isDesktop } = useBreakpoint();
  const carousel = useCarousel(totalItems, config);

  // Desktop: Return children as-is for grid layout
  if (isDesktop) {
    return <>{children}</>;
  }

  // Calculate item width percentage
  const itemWidth = `${100 / carousel.itemsPerView}%`;

  // Calculate total pages for dots
  const totalPages = getTotalPages(totalItems, carousel.itemsPerView);

  // Calculate current page for dots
  const currentPage = Math.floor(carousel.currentIndex / carousel.itemsPerView);

  return (
    <div
      className={className}
      role="region"
      aria-label={ariaLabel}
      aria-live="polite"
    >
      {/* Carousel Track */}
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          style={{ gap: `${config.gap}px` }}
          drag={config.dragEnabled && !prefersReducedMotion ? 'x' : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          dragMomentum={false}
          onDragEnd={carousel.handleDragEnd}
          animate={{
            x: `${-carousel.currentIndex * (100 / carousel.itemsPerView)}%`,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            duration: prefersReducedMotion ? 0 : isMobile ? 0.3 : 0.5,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: itemWidth }}
              aria-hidden={
                index < carousel.currentIndex ||
                index >= carousel.currentIndex + carousel.itemsPerView
              }
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${totalItems}`}
              id={`carousel-item-${index}`}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots Navigation */}
      {config.showDots && totalPages > 1 && (
        <CarouselDots
          total={totalPages}
          current={currentPage}
          onDotClick={(pageIndex) => carousel.goTo(pageIndex * carousel.itemsPerView)}
        />
      )}
    </div>
  );
}
