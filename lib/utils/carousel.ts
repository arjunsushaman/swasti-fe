/**
 * Carousel utility functions
 */

/**
 * Calculate transform percentage for carousel track
 * @param currentIndex - Current carousel index
 * @param itemsPerView - Number of items visible per view
 * @returns CSS transform string
 */
export const getCarouselTransform = (
  currentIndex: number,
  itemsPerView: number
): string => {
  return `${-currentIndex * (100 / itemsPerView)}%`;
};

/**
 * Generate ARIA label for carousel state
 * @param currentIndex - Current carousel index
 * @param totalItems - Total number of items
 * @param itemsPerView - Number of items visible per view
 * @returns ARIA label string
 */
export const getCarouselAriaLabel = (
  currentIndex: number,
  totalItems: number,
  itemsPerView: number
): string => {
  const start = currentIndex + 1;
  const end = Math.min(currentIndex + itemsPerView, totalItems);
  return `Showing items ${start} to ${end} of ${totalItems}`;
};

/**
 * Calculate the maximum index for a carousel
 * @param totalItems - Total number of items
 * @param itemsPerView - Number of items visible per view
 * @returns Maximum index value
 */
export const getMaxIndex = (totalItems: number, itemsPerView: number): number => {
  return Math.max(0, totalItems - itemsPerView);
};

/**
 * Calculate total number of pages/dots for carousel
 * @param totalItems - Total number of items
 * @param itemsPerView - Number of items visible per view
 * @returns Number of pages
 */
export const getTotalPages = (totalItems: number, itemsPerView: number): number => {
  return Math.ceil(totalItems / itemsPerView);
};
