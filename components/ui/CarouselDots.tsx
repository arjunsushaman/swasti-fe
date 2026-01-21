'use client';

interface CarouselDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

/**
 * Carousel navigation dots component
 * Provides visual indicator and direct navigation to carousel pages
 *
 * @param total - Total number of dots/pages
 * @param current - Current active dot index
 * @param onDotClick - Callback when a dot is clicked
 */
export default function CarouselDots({
  total,
  current,
  onDotClick,
}: CarouselDotsProps) {
  return (
    <div
      className="flex justify-center gap-2 mt-8"
      role="tablist"
      aria-label="Carousel navigation"
    >
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-3 rounded-full transition-all duration-300 ${
            index === current
              ? 'bg-primary-600 w-8'
              : 'bg-secondary-300 hover:bg-secondary-400 w-3'
          }`}
          role="tab"
          aria-selected={index === current}
          aria-label={`Go to slide ${index + 1}`}
          aria-controls={`carousel-page-${index}`}
        />
      ))}
    </div>
  );
}
