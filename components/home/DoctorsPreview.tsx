'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedSection, AnimatedDiv } from '@/components/ui/Motion';
import { hoverLift } from '@/lib/animations';
import type { Doctor } from '@/types';

interface DoctorsPreviewProps {
  doctors: Doctor[];
}

export default function DoctorsPreview({ doctors }: DoctorsPreviewProps) {
  // Filter for featured doctors only
  const featuredDoctors = doctors.filter(d => d.featured);

  // If no featured doctors, show all
  const displayDoctors = featuredDoctors.length > 0 ? featuredDoctors : doctors;

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(displayDoctors.length - 2, prev + 1));
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < displayDoctors.length - 2;

  return (
    <AnimatedSection className="py-24 bg-secondary-50 relative">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-primary-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-accent-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Our Expert Doctors</h2>
          <p className="section-subheading max-w-2xl mx-auto text-lg text-secondary-600">
            Our team of experienced specialists brings advanced expertise right to your neighborhood.
          </p>
        </div>

        <div className="relative mb-12">
          {/* Navigation Buttons */}
          {displayDoctors.length > 2 && (
            <>
              <button
                onClick={handlePrev}
                disabled={!canGoPrev}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-secondary-200 flex items-center justify-center transition-all ${
                  canGoPrev ? 'hover:bg-primary-50 hover:border-primary-300 text-secondary-900' : 'opacity-40 cursor-not-allowed text-secondary-400'
                }`}
                aria-label="Previous doctor"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={!canGoNext}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-secondary-200 flex items-center justify-center transition-all ${
                  canGoNext ? 'hover:bg-primary-50 hover:border-primary-300 text-secondary-900' : 'opacity-40 cursor-not-allowed text-secondary-400'
                }`}
                aria-label="Next doctor"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Carousel Container */}
          <div className="overflow-hidden" ref={carouselRef}>
            <motion.div
              className="flex gap-6"
              animate={{ x: `${-currentIndex * 50}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {displayDoctors.map((doctor, index) => (
                <motion.div
                  key={doctor.name}
                  className="min-w-[calc(50%-12px)] flex-shrink-0"
                  whileHover={hoverLift}
                >
                  <div className="glass-card p-6 h-full hover:border-primary-300 transition-colors">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center text-4xl shadow-inner border border-white overflow-hidden">
                        {doctor.imageUrl ? (
                          <img src={doctor.imageUrl} alt={doctor.name} className="w-full h-full object-cover" />
                        ) : (
                          '👨‍⚕️'
                        )}
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl font-bold text-secondary-900 mb-2">{doctor.name}</h3>
                        <p className="text-primary-600 font-medium mb-1 text-sm uppercase tracking-wide">{doctor.qualifications}</p>
                        <p className="text-secondary-600 mb-3 font-medium">{doctor.specialtyLabel}</p>
                        <div className="inline-block px-3 py-1 bg-secondary-100 text-secondary-600 text-xs rounded-full">
                          {doctor.availability}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          {displayDoctors.length > 2 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: displayDoctors.length - 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index ? 'bg-primary-600 w-8' : 'bg-secondary-300 hover:bg-secondary-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <AnimatedDiv delay={0.4} className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link href="/doctors" className="btn-primary shadow-lg shadow-primary-500/25">
              View All Doctors
            </Link>
          </motion.div>
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  );
}
